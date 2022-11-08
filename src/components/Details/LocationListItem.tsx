import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../Home/Home.style';

const LocationListItem: FC = ({location, handleLocationDelete, token}: any) => {
  debugger;
  const {id, lat, lng} = location;
  return (
    <View style={styles.card} key={id}>
      <View>
        <Text style={styles.textStyle}>{'Location'}</Text>

        <Text style={styles.textStyle}>
          {lat} / {lng}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleLocationDelete({token, id})}>
          <Text style={styles.btn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationListItem;
