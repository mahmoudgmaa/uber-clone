import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Cairo, Egypt",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Cairo, Egypt",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            type="ionicon"
            color="white"
            size={18}
            name={item.icon}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        //for the thin line separating them
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
