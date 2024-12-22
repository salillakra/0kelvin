import { TextInput, View } from 'react-native';
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Add your search logic here
        console.log('Searching for:', query);
    };

    return (
        <View className="flex justify-start flex-row items-center rounded-[50px] bg-gray-800  py-1  px-5 m-2">
            <View>
            {/* <MapPin /> */}
            </View>
            <TextInput
                className="flex-1 text-white bg-gray-800"
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Search"
                placeholderTextColor="#888"
            />
        </View>
    );
};

export default SearchBar;