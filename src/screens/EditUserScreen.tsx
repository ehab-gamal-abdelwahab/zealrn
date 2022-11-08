import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EditUsersScreen: FC = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Edit Users Screen</Text>
    </View>
  );
};

export default EditUsersScreen;
