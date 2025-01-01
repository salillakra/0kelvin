import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App() {
  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center relative bg-white">
      <Image
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        source={require('@/assets/images/wallpaper.webp')}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View className="absolute inset-3 bg-opacity-40 rounded-lg max-w-3xl mx-auto flex justify-center items-center">
        <Text className="text-3xl font-bold text-white text-center mb-6">
          Message from the Developer
        </Text>
        <Text className="text-lg text-white font-normal text-center mb-4 px-4">
          Dear users, this is Salil Lakra, the developer of this 0kelvin. I am
          an undergraduate student at BIT Mesra, and I have developed 0kelvin
          as part of my project. I hope you find this app helpful and
          enjoyable.
        </Text>
        <Text className="text-lg text-white font-normal text-center mb-4 px-4">
          Built with love, care, and a lot of coding hours. If you have
          suggestions, feedback, or just want to chat about tech, feel free to
          reach out. Your thoughts are important to me.
        </Text>
        <Text className="text-lg text-white font-normal text-center mb-4 px-4">
          I am constantly working to improve and update the app, so stay tuned
          for new features and improvements. Thanks for being a part of this
          journey!
        </Text>
        <Text className="text-base text-gray-300 font-normal text-center mt-4 px-4">
          0kelvin is open-source and available on GitHub. Feel free to check by
          the link below.
        </Text>


        <View className='mt-4'>
          <Button
            mode="contained-tonal" style={{ borderColor: 'white' }}
            onPress={() => router.push('https://salillakra.vercel.app')}>
            Visit my website
          </Button>

        </View>
        
      </View>
    </View>
  );
}
