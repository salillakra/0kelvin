import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { PartlyCloudyDay } from '@/icons'


const ForecastElement = () => {
    return (
        <View className='flex my-1 rounded-2xl bg-[rgba(225,225,225,0.65)] flex-row justify-between items-center px-2 py-1'>
            <View>
                <Text className='font-Roboto-Regular text-lg'> 24 Dec Monday</Text>
            </View>
            <View className='p-2'>
                <PartlyCloudyDay height={32} width={32} />
            </View>
            <View className='flex flex-row'>
                <Text className='font-Roboto-Light text-base'> 13°C</Text>
                <Text className='font-Roboto-Light text-base'> <Text className='text-gray-300'>/</Text> 24°C</Text>
            </View>
        </View>
    )
}

const Forecast = () => {
    return (
        <View>
            <View className='pl-5 mt-10'>
                <Text className='font-Roboto-Bold text-2xl'>Forecast</Text>
                <Text className='font-Roboto-Light text-base'>Next 10 days</Text>
            </View>
            <View className='flex flex-col px-4 mt-2'>
            {(Array.from({ length: 10 })).map((_, index) => <ForecastElement key={index} />)}
            </View>
        </View>
    )
}

export default Forecast