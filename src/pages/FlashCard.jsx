import { SafeAreaView, View, Text, Button, Image, TouchableOpacity } from "react-native";
import ok from "../assets/ok.png";
import no from "../assets/no.png";
import review from "../assets/review.png";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const FlashCard = () => {

    const [responseCounts, setResponseCounts] = useState({
        know: 0,
        dontKnow: 0,
        research: 0
    });
    const [quesIndex, setQuesIndex] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);



    //get updated data from async storage and Update in the state
    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-res');
            console.log(jsonValue)
            if (jsonValue !== null) {
                const data = JSON.parse(jsonValue);
                setResponseCounts(data);
            } else {
                setResponseCounts({ know: 0, dontKnow: 0, research: 0 }); // Set default values to 0
            }
        } catch (e) {
            console.warn(e);
        }
    };


    // store data in local storage
    const storeData = async (data) => {
        console.log(data);
        try {
            await AsyncStorage.setItem('my-res', JSON.stringify(data));
        } catch (e) {
            console.warn(e);
        }
    };

    //Handle Next Button
    const handleNextCard = () => {
        const nextIndex = quesIndex + 1;
        console.log(nextIndex);
        if(nextIndex === questions.length){
            alert("This is last Question !")
        }
        setQuesIndex(nextIndex >= questions.length ? 0 : nextIndex);
    };
    
    //Response Button function
    const handleResponse = (type) => {
        handleNextCard();
        const totalResponse = responseCounts.know + responseCounts.dontKnow + responseCounts.research;
        const updatedCounts = { ...responseCounts, [type]: totalResponse === questions.length ? responseCounts[type] : responseCounts[type] + 1 };
        setResponseCounts(updatedCounts);
        storeData(updatedCounts);
    };

    const questions = [{
        id: 1,
        question: "What is your Name ?",
        answer: "My Name is Shakil"
    },
    {
        id: 2,
        question: "What is your graduation year ?",
        answer: "Year 2022"
    },
    {
        id: 3,
        question: "Who is very cool person ever you seen?",
        answer: "Subrata Bhai"
    },
    {
        id: 4,
        question: "Is this last question ?",
        answer: "Yes"
    }]


    //Remove Default header
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <SafeAreaView className="flex-1 bg-black items-center justify-center px-5 space-y-6">

            {/* Home and NExt Button */}
            <View className="space-y-4">
                <View>
                    <Button title='Home' onPress={() => navigation.navigate("Home")} />
                </View>
                <View>
                    <Button title='Next Card' color={"orange"} onPress={handleNextCard} />
                </View>
            </View>

            {/* Flash Card */}
            <View className="bg-slate-300 w-full p-5 space-y-6 h-96 rounded-xl">
                <View>
                    <View>
                        <Text className="text-lg font-bold">{`Question ${quesIndex + 1}:`}</Text>
                        <Text className="">{questions[quesIndex].question}</Text>
                    </View>
                    <View>
                        <Text className="text-lg font-bold">{`Answer:`}</Text>
                        <Text className="">{questions[quesIndex].answer}</Text>
                    </View>
                </View>
            </View>

            {/* Response B */}
            <View className="w-full flex flex-row flex-wrap justify-between">
                <TouchableOpacity onPress={() => handleResponse("know")} className="px-6 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-8 h-8" source={ok}></Image>
                    <Text className="font-semibold">I Know</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleResponse("dontKnow")} className="px-4 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-8 h-8" source={no}></Image>
                    <Text className="font-semibold">Don't Know</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleResponse("research")} className="px-4 py-2 bg-slate-300 flex items-center justify-center space-y-1 rounded-2xl">
                    <Image className="w-14 h-8" source={review}></Image>
                    <Text className="font-semibold">Research</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FlashCard;
