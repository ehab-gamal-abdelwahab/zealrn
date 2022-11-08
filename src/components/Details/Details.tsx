import React, {FC, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {
  detailsStart,
  deleteLocation,
} from '../../store/details/Details.actions';
import {styles} from '../Home/Home.style';
import LocationListItem from './LocationListItem';

const Details: FC = () => {
  const dispatch = useAppDispatch();
  const {selectedUser} = useAppSelector(state => state.homeReducer);
  const {isloading, locations} = useAppSelector(state => state.detailsReducer);
  const {token} = useAppSelector(state => state.authReducer.user);

  useEffect(() => {
    dispatch(detailsStart({token: token, email: selectedUser.email}));
  }, [dispatch]);

  const handleLocationDelete = (data: any) => {
    dispatch(deleteLocation(data));
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>User Name : {selectedUser.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Emai : {selectedUser.email}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '90%',
        }}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => alert('ADD')}>
          <Text style={styles.btn}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: '80%', width: '90%'}}>
        {!isloading && locations && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={locations}
            renderItem={({item}) => (
              <LocationListItem
                location={item}
                handleLocationDelete={handleLocationDelete}
                token={token}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
        {isloading && <ActivityIndicator size="large" />}
      </View>
    </View>
  );
};

export default Details;
