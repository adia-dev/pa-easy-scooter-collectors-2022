import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const RideOptionsCard = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`absolute p-3 rounded-full z-50 left-5 top-3`}>
                    <Icon name="chevron-left" size={18} type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center text-xl py-5`}>Select a Ride</Text>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard