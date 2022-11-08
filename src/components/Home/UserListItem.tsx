import React, {FC} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Home.style';
import CustomButton from '../ui/CustomButton';

const UserListItem: FC = ({
  user,
  handleUserDelete,
  token,
  handleSelectedUser,
}: any) => {
  const {id, email, name} = user;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        handleSelectedUser(user);
        navigation.navigate('UserDetailsScreen' as never);
      }}
      style={styles.card}
      key={id}>
      <View>
        <Text style={styles.textStyle}>{name}</Text>

        <Text style={styles.textStyle}>{email}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelectedUser(user)}>
          <Text style={styles.btn}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleUserDelete({token, email, id})}>
          <Text style={styles.btn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
