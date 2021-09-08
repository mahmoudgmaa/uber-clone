import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "mapScreen",
  },
  {
    id: "2",
    title: "Get a food",
    image: "https://links.papareact.com/28w",
    screen: "eatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin&&"opacity-20"}`}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text style={tw`ml-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 ml-4 mt-1`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
