import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import axios from "axios";
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux";
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin, setPickupPoints, setScooters } from "../slices/navSlice";

const TEMP_BASE_URL = "http://localhost:5500/api/v2/"

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {


        const fetchData = async () => {
            const [pickupPoints, scooters] = await Promise.all([getPickupPoints(), getScooters()])

            console.log(pickupPoints.data)
            console.log(scooters.data);

            dispatch(setScooters(scooters.data))
            dispatch(setPickupPoints(pickupPoints.data))
        }

        fetchData()

    }, [])


    const getPickupPoints = async () =>
        await axios.get(TEMP_BASE_URL + "pickups");

    const getScooters = async () =>
        await axios.get(TEMP_BASE_URL + "scooters/collect");



    const googlePlacesAutocompleteStyle = {
        container:
        {
            flex: 0
        },
        textInput: {
            fontSize: 18
        }
    }

    return (
        <SafeAreaView style={tw`bg-white`}>
            <View style={tw`p-5`}>
                {/* <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }} /> */}
                <Text style={tw`text-2xl font-semibold pb-3`}>easy scooter</Text>

                <GooglePlacesAutocomplete
                    placeholder='Where are you ?'
                    styles={googlePlacesAutocompleteStyle}
                    enablePoweredByContainer={false}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    query={{
                        key: REACT_APP_GOOGLE_MAPS_API_KEY,
                        language: 'fr'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />


                <NavOptions />
                {/* <NavFavorites /> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})