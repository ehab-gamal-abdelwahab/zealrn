import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {authStart} from '../../store/auth/Auth.actions';
import {styles} from './Login.style';
import CustomButton from '../ui/CustomButton';

const Login: FC = () => {
  const [email, setEmail] = useState('ehab@ff.com');
  const [password, setPassword] = useState('P@ssw0rd');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {isloading} = useAppSelector(state => state.authReducer);

  const handleLogin = async () => {
    const name = '';
    const payload = {email, password, name};
    dispatch(authStart(payload));
  };
  return (
    <KeyboardAvoidingView style={[styles.mainBody]}>
      {isloading && <ActivityIndicator size="large" />}
      <View>
        <Text style={styles.registerTextStyle}>Welcom Back</Text>
        <Text style={styles.registerTextStyle}>Login</Text>
      </View>
      <View style={[styles.SectionStyle]}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          style={styles.inputStyle}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={[styles.SectionStyle]}>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <CustomButton
        text="LOGIN"
        handleBtnClick={handleLogin}
        disabled={isloading}
      />
      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('Register' as never)}>
        New Here ? Register
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Login;
