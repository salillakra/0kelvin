import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hourly from "@/components/Hourly";
import Forecast from "@/components/Forecast";
import AirQualityMeter from "@/components/AirQuality";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 relative bg-slate-100 ">
        {/* <ImageBackground blurRadius={5} source={require("@/assets/wallpaper.jpg")} style={StyleSheet.absoluteFill} /> */}
        <ScrollView>
          <Header />
          <Hero />
          <Hourly />
          <Forecast />
          <AirQualityMeter />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
