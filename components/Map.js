import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import React from 'react';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from "react-redux";
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from "../slices/navSlice";

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }

            }
        >

            {origin && destination && (

                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    strokeWidth={3}
                    strokeColor="black"
                    mode="DRIVING"
                    apikey={REACT_APP_GOOGLE_MAPS_API_KEY}
                />
            )
            }

            {origin?.location && (
                <Marker coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }}
                    title="Origin"
                    description={origin.description}
                    identifier='origin'
                />
            )}

        </MapView>
    )
}

export default Map