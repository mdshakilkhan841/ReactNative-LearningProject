import { Button, Text, View } from 'react-native';

const HomePage = (props) =>{
    return (
        <View className="flex-1 bg-black items-center justify-center h-screen space-y-10">
            <View className=" px-20 py-4 space-y-2 rounded-xl or">
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-green-500">3  </Text>| I Know</Text>
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-red-500">1  </Text>| I Don't Know</Text>
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-orange-500">6  </Text>Need Research</Text>
            </View>
            {/* <View on className="flex items-center justify-center bg-sky-400 first-letter:rounded-full h-40 w-40">
                <Text className=" text-white text-4xl font-semibold uppercase">Start</Text>
            </View> */}
            <Button title='START' onPress={() => props.navigation.navigate("Flash Card")} />
        </View>
    );
}
export default HomePage ;

