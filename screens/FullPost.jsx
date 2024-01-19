import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import axios from 'axios';
import {Loading} from '../components/Loading/Loading';

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {id, title} = route.params;

  const fetchPost = async () => {
    try {
      setIsLoading(true);

      navigation.setOptions({
        title,
      });

      const {data} = await axios.get(`https://6499634679fbe9bcf83f2512.mockapi.io/posts/${id}`);
      setPost(data);
      setIsLoading(false);

    } catch (e) {
      console.error(e);
      Alert.alert('Ошибка', 'Не удалось получить статью');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Loading/>
     </View>
    );
  }

  return (
   <View style={{padding: 20, marginTop: 35}}>
     <PostImage
      source={{uri: post.imageUrl}}/>
     <PostText>
       {post.text}
     </PostText>
   </View>
  );
};