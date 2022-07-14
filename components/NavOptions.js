import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin, selectPickupPoints, selectScooters, setShowPickupPoints } from '../slices/navSlice'


const data = [
    {
        id: "123",
        title: "Pickup Points",
        image: "https://icon-library.com/images/pick-up-icon/pick-up-icon-15.jpg",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Scooters",
        image: "https://img2.freepng.fr/20180816/vrb/kisspng-electric-vehicle-electric-scooter-jdbug-8-kick-sc-electric-scooter-transparent-background-png-png-ar-5b753feae97719.4298875115344107309563.jpg",
        screen: "ScootersScreen"
    }
]


const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
    const scooters = useSelector(selectScooters)
    const pickupPoints = useSelector(selectPickupPoints)
    const dispatch = useDispatch()

    return (
        <View
            style={tw`flex-row`}
        >
            <TouchableOpacity
                disabled={!pickupPoints}
                onPress={() => {
                    navigation.navigate(data[0].screen)
                    dispatch(setShowPickupPoints(true))

                }}
                style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View style={tw`${!pickupPoints && "opacity-20"}`}>
                    <Image style={{ width: 120, aspectRatio: 1 / 1, resizeMode: 'contain' }} source={{ uri: data[0].image }} />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{data[0].title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        type='antdesign'
                        name='arrowright'
                        color='white' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={!scooters}
                onPress={() => {
                    navigation.navigate(data[1].screen)
                    dispatch(setShowPickupPoints(false))

                }}
                style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View style={tw`${!scooters && "opacity-20"}`}>
                    <Image style={{ width: 120, aspectRatio: 1 / 1, resizeMode: 'contain' }} source={{ uri: data[1].image }} />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{data[1].title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        type='antdesign'
                        name='arrowright'
                        color='white' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NavOptions

