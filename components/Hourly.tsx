import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { ClearSkyDay } from "../icons/index";


const HourlyItem = ({ item }: any) => (
    <View className="items-center bg-transparent flex my-4 gap-2 mx-1 flex-col-reverse justify-center px-3  w-20">
        <Text className="text-base font-Roboto-Regular  mb-2">
            11:00
        </Text>
        <View className="bg-blue-50 rounded-full p-1 mb-2">
            <ClearSkyDay height={40} width={40} />
        </View>
        <Text className="text-lg font-Roboto-Regular mb-2">
            {25}{"°C"}
        </Text>
    </View>
);

const Hourly = () => {
    return (
        <View className="mt-10">
            <Text className="text-xl font-Roboto-Bold mb-3 ml-4">
                Hourly Forecast
            </Text>
            <View className="flex rounded-2xl mx-4 bg-[rgba(225,225,225,0.65)] py-2 px-2 flex-row justify-between ">
                <FlatList
                    horizontal
                    data={Array.from({ length: 24 }, (i: number) => i)}
                    renderItem={
                        (items) => {
                            return <HourlyItem key={items} />
                        }
                    }
                />
            </View>
        </View>
    );
};

export default Hourly;