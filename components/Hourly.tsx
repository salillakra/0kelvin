import { Text, View, FlatList } from 'react-native';
import React from 'react';
import ClearSkyDay from '../icons/ClearSkyDay';

const data = Array.from({ length: 24 }, (_, i) => {
    const baseTemp = 20;
    const hour = i;
    const tempVariation = Math.sin((hour - 6) * Math.PI / 24) * 8;
    const temp = Math.round(baseTemp + tempVariation);
    
    return {
        time: `${i % 12 || 12} ${i < 12 ? 'AM' : 'PM'}`,
        temp: `${temp}°C`,
        id: i.toString(),
    };
});

const HourlyItem = ({ item }) => (
    <View className="items-center justify-center px-3 py-2 w-20">
        <Text className="text-base font-semibold mb-2">
            {item.time}
        </Text>
        <View className="bg-blue-50 rounded-full p-2 mb-2">
            <ClearSkyDay height={40} width={40} />
        </View>
        <Text className="text-lg font-bold">
            {item.temp}
        </Text>
    </View>
);

const Hourly = () => {
    return (
        <View className="my-4">
            <Text className="text-xl font-bold mb-3 ml-4">
                Hourly Forecast
            </Text>
            <View className="bg-white rounded-2xl mx-4 shadow-md">
                <FlatList
                    horizontal
                    className="py-3 px-2"
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <HourlyItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Hourly;