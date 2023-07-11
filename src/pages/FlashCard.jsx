import { View, Text, Button, Image } from "react-native";
import ok from "../assets/ok.png";
import no from "../assets/no.png";
import review from "../assets/review.png";

const FlashCard = (props) => {
    return (
        <View className="flex-1 bg-black items-center justify-center px-5 space-y-6">
            <View className="space-y-4">
                {/* <Text className="bg-sky-400 w-28 px-2 py-1 text-lg text-center font-semibold rounded-2xl">Home</Text> */}
                <View>
                    <Button title='Home' onPress={() => props.navigation.navigate("Home")} />
                </View>
                {/* <Text className="bg-slate-300 text-red-500 w-28  py-1 text-lg text-center font-semibold rounded-2xl">Next Card</Text> */}
                <View>
                    <Button title='Next Card' onPress={() => props.navigation.navigate("")} />
                </View>
            </View>
            <View className="bg-slate-300 w-full p-5 space-y-6 h-96 rounded-xl">
                <View>
                    <Text className="text-lg font-bold">{`Question ${1}:`}</Text>
                    <Text className="">What are the Props in React Component ?</Text>
                </View>
                <View>
                    <Text className="text-lg font-bold">{`Answer:`}</Text>
                    <Text className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, similique impedit temporibus, sed laudantium placeat, natus eveniet error cum voluptatem! Voluptatum autem consequatur ipsa molestiae ipsam! Repellat, minima nulla!</Text>
                </View>
            </View>
            <View className="w-full flex flex-row flex-wrap justify-between">
                <View className="px-6 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-8 h-8" source={ok}></Image>
                    <Text className="font-semibold">I Know</Text>
                </View>
                <View className="px-4 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-8 h-8" source={no}></Image>
                    <Text className="font-semibold">Don't Know</Text>
                </View>
                <View className="px-4 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-14 h-8" source={review}></Image>
                    <Text className="font-semibold">Research</Text>
                </View>
            </View>
        </View>
    );
};

export default FlashCard;
