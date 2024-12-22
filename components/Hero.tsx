import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClearSkyDay from '../icons/ClearSkyDay'

const Hero = () => {
    return (
        <View className='mx-4 mt-10 rounded-xl p-6 flex-row justify-between bg-[rgba(225,225,225,0.65)] shadow-lg'>
            <View className='flex-col flex items-start'>
                <Text className='text-2xl font-semibold text-gray-800 mb-2'>Now</Text>
                <View className="flex-row items-center">
                    <Text className='font-bold pt-2 text-6xl text-gray-900'>24&#176;</Text>
                    <ClearSkyDay height={50} width={50} />
                </View>
                <View className='flex-row mt-2'>
                    <Text className='text-lg text-gray-600 mr-4'>High: 12&#176;</Text>
                    <Text className='text-lg text-gray-600'>Low: 12&#176;</Text>
                </View>
            </View>
            <View className='flex-col justify-center items-start'>
                <Text className='text-xl font-medium text-gray-800'>Partly Cloudy</Text>
                <Text className='text-lg text-gray-600'>Feels Like 24&#176;</Text>
            </View>
        </View>
    )
}

export default Hero
