import SavedLocations from '@/components/SavedLocations';
import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View className='pt-3 bg-slate-100 flex-1'>
      <View className=' px-3'>

        <Searchbar
          placeholder="Search for a location"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <Divider bold className='my-2' />
      <SavedLocations />

    </View>
  );
};

export default Search;
