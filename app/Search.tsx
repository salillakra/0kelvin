import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Searchbar, Text, Divider, Button } from "react-native-paper";
import axios from "axios";
import SavedLocationsComp from "@/components/SavedLocations";
import { useLocation } from "@/store/useLocation";
import { useRouter } from "expo-router";
import { StoreLocations } from "@/utils/StoreLocations";

interface Suggestion {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  class?: string;
  type?: string;
  address: {
    name?: string;
    state?: string;
    country?: string;
    country_code?: string;
    city?: string;
    state_district?: string;
  };
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const updateLocation = useLocation((state) => state.setLocation);
  const router = useRouter();

  const fetchSuggestions = async (query: string): Promise<void> => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get<Suggestion[]>(
        `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.EXPO_PUBLIC_LOCATIONIQ_API_KEY}&q=${query}&format=json`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) fetchSuggestions(searchQuery);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSuggestionPress = (place: Suggestion) => {
    router.push("/");
    updateLocation({
      latitude: parseFloat(place.lat),
      longitude: parseFloat(place.lon),
      placeName:
        place.address.city ||
        place.address.name ||
        place.address.state_district ||
        place.display_name,
    });

    setSearchQuery(place.display_name);
    setSuggestions([]);
  };

  const SaveLocation = (place: Suggestion) => {
    StoreLocations({
      location: {
        latitude: parseFloat(place.lat),
        longitude: parseFloat(place.lon),
      },
      placeName:
        place.address.city ||
        place.address.name ||
        place.address.state_district ||
        place.display_name,
    });
  };

  return (
    <>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="pt-5 px-2 flex-1">
          <Searchbar
            className="text-gray-700"
            placeholder="Type a location..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <Divider className="my-2" />

          {searchQuery.length > 3 ? (
            <>
              {/* Loading Indicator */}
              {loading && (
                <View className="flex items-center justify-center mt-4">
                  <ActivityIndicator size="large" color="#6200ea" />
                </View>
              )}
              {!loading && searchQuery && suggestions.length > 0 && (
                <FlatList
                  data={suggestions}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleSuggestionPress(item)}
                    >
                      <View className="mb-1 flex flex-row justify-between bg-[rgba(225,225,225,0.65)] rounded-md ">
                        <View className="flex flex-col items-start justify-between px-4 py-3">
                          <Text className="text-lg font-Roboto-Medium w-60 ">
                            {item.display_name}
                          </Text>
                          {(item.address?.state || item.address?.country) && (
                            <Text className="text-sm font-Roboto-Regular text-gray-400">
                              {item.address?.state && `${item.address.state}, `}
                              {item.address?.country}
                            </Text>
                          )}
                        </View>
                        <View className="flex items-center justify-center px-4 py-3">
                          <Button
                            mode="contained"
                            className=""
                            onPress={() => SaveLocation(item)}
                          >
                            Save
                          </Button>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
              {!loading &&
                searchQuery.length >= 3 &&
                suggestions.length === 0 && (
                  <View className="flex items-center justify-center mt-10">
                    <Text className="text-gray-500 text-lg">
                      No locations found. Try another search.
                    </Text>
                  </View>
                )}
            </>
          ) : (
            <SavedLocationsComp />
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Search;
