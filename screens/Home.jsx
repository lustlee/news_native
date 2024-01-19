import {Alert, View, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {Post} from '../components/Post/Post';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Loading} from '../components/Loading/Loading';

export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const {data} = await axios.get('https://6499634679fbe9bcf83f2512.mockapi.io/posts');
      setPosts(data);
      setIsLoading(false);

    } catch (e) {
      console.error(e);
      Alert.alert('Ошибка', 'Не удалось получить статьи');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Loading/>
     </View>
    );
  }

  return (
   <View>
     <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
      data={posts}
      renderItem={({item}) => (
       <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
         <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl}/>
       </TouchableOpacity>
      )}
     />
   </View>
  );
}