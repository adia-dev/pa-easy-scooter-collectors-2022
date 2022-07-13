import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {

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
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }} />

                <GooglePlacesAutocomplete
                    placeholder='Where are you ?'
                    styles={googlePlacesAutocompleteStyle}
                    query={{
                        key: REACT_APP_GOOGLE_MAPS_API_KEY,
                        language: 'fr'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />


                <NavOptions />
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