import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {authStart} from '../../store/auth/Auth.actions';
import {styles} from '../Login/Login.style';
import CustomButton from '../ui/CustomButton';

const Register: FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {isloading} = useAppSelector(state => state.authReducer);

  const handleRegister = async () => {
    const payload = {email, password, name};
    dispatch(authStart(payload));
  };
  return (
    <View style={[styles.mainBody]}>
      {isloading && <ActivityIndicator size="large" />}
      <View>
        <Text style={styles.registerTextStyle}>Welcome</Text>

        <Text style={styles.registerTextStyle}>Register</Text>
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          placeholder="Name"
          style={styles.inputStyle}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          style={styles.inputStyle}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <CustomButton
        text="REGISTER"
        handleBtnClick={handleRegister}
        disabled={isloading}
      />
    </View>
  );
};

export default Register;
