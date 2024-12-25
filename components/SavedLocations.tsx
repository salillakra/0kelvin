import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { MapPinIcon, XCircleIcon } from "react-native-heroicons/solid"
import React, { useState } from 'react'
import SvgMainlyClearDay from '@/icons/MainlyClearDay'
import { Divider } from 'react-native-paper'
import { Button } from 'react-native-paper';
import * as Location from 'expo-location';

const SavedItems = ({ isManage }: { isManage: boolean }) => {
    return (
        <>
            <Divider />
            <View className='flex pl-8 my-2 items-center w-full flex-row justify-between px-3 '>
                <View className='flex flex-row gap-4'>
                    <View >
                        <SvgMainlyClearDay height={38} width={38} />
                    </View>
                    <View className='flex flex-col'>
                        <Text className='font-Roboto-Light text-xl'>Gumla,Jharkhand</Text>
                        <Text className='font-Roboto-Light text-sm'>23&#176; Parly Cloudy</Text>
                    </View>
                </View>
                {
                    !isManage && (
                        <Button>
                            <XCircleIcon color={"#000"} size={22} />
                        </Button>
                    )
                }
            </View>
            <Divider />
        </>
    )
}

const SavedLocations = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isManage, setIsManage] = useState<boolean>(true)

    async function getCurrentLocation() {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync();
        setLocation(location);
        console.log(location)
    }

    if (errorMsg) {
        Alert.alert(errorMsg)
    }




    return (
        <View>
            <TouchableOpacity onPress={getCurrentLocation} className='flex gap-2 w-44 mt-2 ml-4 rounded-[50px] bg-blue-400 justify-center flex-row items-center py-2 px-3'>
                <MapPinIcon size={20} color={"#fff"} />
                <Text className='font-Roboto-Regular text-white'>
                    Use location
                </Text>
            </TouchableOpacity>
            <View>
                <View className='flex my-4 px-3 flex-row items-center justify-between'>
                    <Text className='text-xl font-Roboto-Regular text-blue-600'>Saved locations</Text>
                    <Button className='font-Roboto-Regular text-xl' onPress={() => setIsManage((value) => !value)}>{isManage ? "Manage" : "Done"}</Button>
                </View>

                <View className='mt-2'>
                    <SavedItems isManage={isManage} />
                    <SavedItems isManage={isManage} />
                    <SavedItems isManage={isManage} />
                    <SavedItems isManage={isManage} />
                    <SavedItems isManage={isManage} />
                </View>
            </View>
        </View>
    )
}

export default SavedLocations



// {"coords": {"accuracy": 800, "altitude": 0, "altitudeAccuracy": 0, "heading": 0, "latitude": 23.077088, "longitude": 84.5413851, "speed": 0}, "mocked": false, "timestamp": 1735038736538}  