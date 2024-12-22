import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { MapPinIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

const SearchBar = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // console.log('Searching for:', query);
    };

    return (
        <View className="flex gap-2 justify-start flex-row items-center rounded-[50px] bg-gray-800  py-1  px-5 m-2">
            <View>
                <MapPinIcon color={"white"} size={30} />
            </View>
            
            <TextInput
                className="flex-1 text-xl text-white bg-gray-800"
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Search"
                placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => handleSearch(searchQuery)}>
                <MagnifyingGlassIcon  color={"white"} size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;