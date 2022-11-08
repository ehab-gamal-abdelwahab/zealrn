import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../store/hooks';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/Home';
import EditUserScreen from '../screens/EditUserScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const MainNavigator: FC = () => {
  const stack = createNativeStackNavigator();
  const {user} = useAppSelector(state => state.authReducer);

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        {user == null || !user.token ? (
          <>
            <stack.Screen
              name="Login"
              component={() => <Login />}></stack.Screen>
            <stack.Screen name="Register" component={Register}></stack.Screen>
          </>
        ) : (
          <>
            <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
            <stack.Screen
              name="EditUserScreen"
              component={EditUserScreen}></stack.Screen>
            <stack.Screen
              name="UserDetailsScreen"
              component={UserDetailsScreen}></stack.Screen>
          </>
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
