import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { setDestination } from '../slices/navSlice';

const NavFavorites = () => {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(null)



    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            coords: {
                lat: 48.9975661,
                lng: 1.9126917,
            },
            destination: "3 Allée Jacques Tati, Les Mureaux, France"
        },
        {
            id: "456",
            icon: "school",
            coords: {
                lat: 48.8491666,
                lng: 2.3897343,
            },
            location: "School",
            destination: "ESGI, Rue du Faubourg Saint-Antoine, Paris, France"
        },
        {
            id: "789",
            icon: "train",
            coords: {
                lat: 48.8917666,
                lng: 2.2387265,
            },
            location: "Train Station",
            destination: "La Défense, Puteaux, France"
        }
    ]

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )
            }
            renderItem={({ item }) =>
            (
                <TouchableOpacity
                    onPress={() => {
                        dispatch(setDestination({ description: item.destination, location: item.coords }))
                        setSelected(selected != item.id ? item.id : null)
                    }}
                    style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3 `}
                        name={item.icon}
                        type='ionicon'
                        color={"white"}
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg ${selected == item.id && 'text-blue-500'}`}>{item.location}</Text>
                        <Text style={tw`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})