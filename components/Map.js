import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from "react-redux";
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, selectPickupPoints, selectScooters, selectShowPickupPoints, setDestination } from "../slices/navSlice";

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const pickupPoints = useSelector(selectPickupPoints)
    const scooters = useSelector(selectScooters)
    const showPickupPoints = useSelector(selectShowPickupPoints)
    const mapRef = useRef(null)

    const [scooterWaypoints, setScooterWaypoints] = useState(null)
    const [pickupPointsWaypoints, setPickupPointsWaypoints] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {

        setScooterWaypoints(scooters?.map((scooter) => ({ location: { lat: scooter.lat, lng: scooter.lng }, stopover: true })))
        setPickupPointsWaypoints(pickupPoints?.map((pickupPoint) => ({ location: { lat: pickupPoint.lat, lng: pickupPoint.lng }, stopover: true })))

        console.log(scooterWaypoints, pickupPointsWaypoints);

    }, [scooters, pickupPoints])


    useEffect(() => {

        mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
            animated: true
        })
    }, [origin, destination])


    return (
        <MapView
            ref={mapRef}
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

            {showPickupPoints && pickupPoints && pickupPoints.map((pickupPoint) => (
                <Marker
                    key={pickupPoint.id}
                    pinColor="orange"
                    coordinate={{ latitude: pickupPoint.lat, longitude: pickupPoint.lng }}
                    title={pickupPoint.name}
                    description={pickupPoint.name}
                    onPress={() =>
                        dispatch(setDestination({ description: pickupPoint.name, location: { lat: pickupPoint.lat, lng: pickupPoint.lng } }))
                    }
                    identifier='destination'
                />
            ))}

            {!showPickupPoints && scooters && scooters.map((scooter) => (
                <Marker
                    key={scooter.id}
                    pinColor="purple"
                    coordinate={{ latitude: scooter.lat, longitude: scooter.lng }}
                    title={scooter.name}
                    description={scooter.name}
                    identifier='destination'
                />
            ))}

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

            {destination?.location && (
                <Marker coordinate={{ latitude: destination.location.lat, longitude: destination.location.lng }}
                    title="Destination"
                    pinColor="red"
                    description={destination.description}
                    identifier='destination'
                />
            )}

            {origin?.location && (
                <Marker coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }}
                    title="Origin"
                    pinColor="blue"
                    description={origin.description}
                    identifier='origin'
                />
            )}



        </MapView>
    )
}

export default Map