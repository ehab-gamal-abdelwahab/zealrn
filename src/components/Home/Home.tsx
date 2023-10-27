import React, { FC, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  deleteUser,
  homeStart,
  selectedUser,
} from "../../store/home/Home.actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../types/users.type";
import { styles } from "./Home.style";
import UserListItem from "./UserListItem";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, users, locations } = useAppSelector(
    (state) => state.homeReducer
  );
  const { token } = useAppSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(homeStart(token));
  }, [dispatch]);

  const handleUserDelete = (data: any) => {
    dispatch(deleteUser(data));
  };

  const handleSelectedUser = useCallback((payload: User) => {
    dispatch(selectedUser(payload));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}># Locations: {locations.length}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}># Users: {users.length}</Text>
      </View>
      <View style={{ height: "90%", width: "90%" }}>
        {!isLoading && users && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={({ item }) => (
              <UserListItem
                user={item}
                handleUserDelete={handleUserDelete}
                token={token}
                handleSelectedUser={handleSelectedUser}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
        {isLoading && <ActivityIndicator size="large" />}
      </View>
    </View>
  );
};

export const aws_secret = "AKIAIMNOJVGFDXXXE4OA";
export const BUNDLE_ENTERPRISE__CONTRIBSYS__COM = "cafebabe:deadbeef";

export default Home;
