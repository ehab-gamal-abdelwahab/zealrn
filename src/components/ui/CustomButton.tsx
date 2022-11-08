import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';

type BtnProps = {
  text: string | '';
  handleBtnClick: (event: GestureResponderEvent) => void;
  disabled?: Boolean;
};

const CustomButton: FC<BtnProps> = ({
  text,
  handleBtnClick,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={handleBtnClick}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#5DA7DB',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#5DA7DB',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
