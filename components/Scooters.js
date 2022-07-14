import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectScooters, setDestination } from '../slices/navSlice';


const Scooters = () => {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(null)

    const scooters = useSelector(selectScooters);


    return (
        <FlatList
            data={scooters}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )
            }
            renderItem={({ item }) =>
            (
                <TouchableOpacity
                    onPress={() => {
                        dispatch(setDestination({ description: item.city, location: { lat: item.lat, lng: item.lng } }))
                        setSelected(selected != item.id ? item.id : null)
                    }}
                    style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-200 p-3 `}
                        name={item.icon ?? "car"}
                        type='ionicon'
                        color={"black"}
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg ${selected == item.id && 'text-blue-500'}`}>{item.name}</Text>
                        <Text style={tw`text-gray-500`}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default Scooters

const styles = StyleSheet.create({})