import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux";
import tw from 'tailwind-react-native-classnames';
import { setDestination } from "../slices/navSlice";
import NavFavorites from "./NavFavorites";


const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();



    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where to ?'
                    styles={googlePlacesAutocompleteStyle}
                    enablePoweredByContainer={false}
                    minLength={2}
                    returnKeyType={"search"}
                    onPress={(data, details = null) => {

                        console.log(details.geometry.location)

                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        navigation.navigate("RideOptionsCard")

                    }}
                    fetchDetails={true}
                    query={{
                        key: REACT_APP_GOOGLE_MAPS_API_KEY,
                        language: 'fr'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>
            <NavFavorites />
            <View style={tw`flex-row items-center justify-around`}>
                <TouchableOpacity style={tw`bg-black rounded-full flex-row items-center px-2 py-1`} onPress={() => navigation.navigate('RideOptionsCard')}>
                    <Icon name='car' type="ionicon" color='white' />
                    <Text style={tw`ml-2 text-white`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw` rounded-full flex-row items-center px-2 py-1`} onPress={() => navigation.navigate('EatsScreen')}>
                    <Icon name='fast-food-outline' type="ionicon" color='black' />
                    <Text style={tw`ml-2`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const googlePlacesAutocompleteStyle = StyleSheet.create({
    container:
    {
        flex: 0,
        backgroundColor: "white",
        paddingTop: 20
    },
    textInput: {
        fontSize: 18,
        borderRadius: 0,
        backgroundColor: "#DDDDDF"
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})