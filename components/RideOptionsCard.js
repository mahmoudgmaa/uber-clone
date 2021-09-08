import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTime } from "../slices/navSlice";

const data = [
  {
    id: "1",
    title: "uberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "3",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHANGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selectedCar, setSelectedCar] = useState(null);
  const travelTime = useSelector(selectTravelTime);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center py-3 text-xl`}>
        Select a Ride - {travelTime?.distance.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCar(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selectedCar?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <View style={tw`ml-6`}>
              <Text style={tw`text-xl mr-9 font-semibold`}>{item.title}</Text>
              <Text>{travelTime?.duration.text}</Text>
            </View>
            <Text >
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "EGP",
              }).format(
                (travelTime?.duration.value *
                  SURGE_CHANGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selectedCar}
          style={tw`bg-black py-3 ${!selectedCar && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selectedCar?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
