import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setDestination } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-3 text-xl`}>Hello, User</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("rideOptionsCard");
            }}
            styles={{
              container: {
                backgroundColor: "white",
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                backgroundColor: "#dddddf",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            query={{
              //google key
              key: "",
              language: "en",
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full bg-black`}
          onPress={() => navigation.navigate("rideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-center text-white`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eeats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
