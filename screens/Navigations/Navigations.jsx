import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../Home';
import {FullPost} from '../FullPost';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

// <Routes>...</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Новости'}}/>
       <Stack.Screen name="FullPost" component={FullPost} options={{title: 'Статья'}}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};