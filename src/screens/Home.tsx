import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Home from '../components/Home/Home';

const HomeScreen: FC = props => {
  const navigation = useNavigation();
  return <Home />;
};

export default HomeScreen;

{
  /* <View>
      <Text>Users Screen</Text>
      <Button
        title="Edit User"
        onPress={() => navigation.navigate('EditUserScreen')}></Button>
      <Button
        title="User Details"
        onPress={() => navigation.navigate('UserDetailsScreen')}></Button>
    </View> */
}
