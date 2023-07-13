import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
    const [resData, setResData] = useState({});

    const navigation = useNavigation();
    //Remove Default header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    // read the store value
    useFocusEffect(
        useCallback(() => {
            getData();
        },[])
    );
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-res');
            console.log(jsonValue);
            if (jsonValue !== null) {
                const data = JSON.parse(jsonValue);
                setResData(data);
            }
            else {
                setResData({ know: 0, dontKnow: 0, research: 0, quesIndex: 0 }); // Set default values to 0
            }

        } catch (e) {
            // error reading value
            console.warn(e);
        }
    };

    //Clear Data
    
    const removeData = async () => {
        try {
            const savedUser = await AsyncStorage.clear();
            setResData({ know: 0, dontKnow: 0, research: 0, quesIndex: 0 });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <SafeAreaView className="flex-1 relative bg-black items-center justify-center space-y-10">
            <View className=" px-20 py-4 bg-slate-600 space-y-2 rounded-xl">
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-green-500">{resData.know}  </Text>| I Know</Text>
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-red-500">{resData.dontKnow}  </Text>| I Don't Kno</Text>
                <Text className="text-white text-lg"><Text className="text-xl font-bold text-orange-500">{resData.research}  </Text>| Need Research</Text>
            </View>
            <View>
                <Button title='Clear Data' color={"red"} onPress={removeData}></Button>
            </View>
            <TouchableOpacity className="flex items-center justify-center bg-sky-400 first-letter:rounded-full h-40 w-40"
                onPress={() => navigation.navigate("FlashCard")}
            >
                <Text className=" text-white text-4xl font-semibold uppercase">Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default HomePage;

