import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
} from "react-native-heroicons/outline";
import { Link } from "expo-router";
import { Divider } from "react-native-paper";
import { useLocation } from "@/store/useLocation";

const Header = () => {
  const PlaceName = useLocation((state) => state.location.placeName);

  return (
    <>
      <View className="flex px-5 mt-4 justify-between flex-row items-center ">
        <View className="flex flex-col ">
          <Text className="text-Black font-bold text-xl">{PlaceName}</Text>
          <MapPinIcon color={"rgb(0,0,0)"} size={12} />
        </View>

        <View className="fles gap-3 flex-row justify-end items-center">
          <Link href="/search">
            <MagnifyingGlassIcon color={"rgb(0,0,0)"} size={30} />
          </Link>
          <Link href="/info">
            <InformationCircleIcon color={"rgb(0,0,0)"} size={30} />
          </Link>
        </View>
      </View>
      <Divider bold className="mt-5" />
    </>
  );
};
export default Header;
