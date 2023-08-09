import {
    View,
    SafeAreaView,
    Image,
    Alert,
    ActivityIndicator,
    Text,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

import { COLORS, SHADOWS, SIZES, icons, images } from "../../constants";
import { data } from "../../constants/dummy";

const PlantDetails = () => {
    const router = useRouter();
    const { id } = useSearchParams();
    const [currentItem, setCurrentItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // console.log(id);

    useEffect(() => {
        setIsLoading(true);

        try {
            const item = data.filter((item) => item.id === id);
            if (item.length) {
                setCurrentItem(item[0]);
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "transparent" },
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerShown: true,
                    headerTitle: "",
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => router.back()}>
                                <Image source={icons.backArrow} />
                            </TouchableOpacity>
                        );
                    },
                }}
            />

            <View
                style={{
                    backgroundColor: COLORS.mainBg,
                    height: "100%",
                }}
            >
                {isLoading ? (
                    <View
                        style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ActivityIndicator
                            size="large"
                            color={COLORS.primary}
                        />
                    </View>
                ) : (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "70%",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: COLORS.mainBg,
                                height: "100%",
                                width: "30%",
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {[
                                icons.sun,
                                icons.icon2,
                                icons.icon3,
                                icons.icon4,
                            ].map((it) => (
                                <View
                                    style={[
                                        {
                                            backgroundColor: COLORS.white,
                                            padding: 4,
                                            borderRadius: 10,
                                            marginVertical: 25,
                                            width: 50,
                                            height: 50,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        },
                                        SHADOWS.medium,
                                    ]}
                                >
                                    <Image
                                        source={it}
                                        style={{ width: 30, height: 30 }}
                                        resizeMode="contain"
                                    />
                                </View>
                            ))}
                        </View>
                        <View
                            style={{
                                width: "70%",
                                height: "100%",
                                borderBottomLeftRadius: 70,
                            }}
                        >
                            <Image
                                source={currentItem.image}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderBottomLeftRadius: 70,
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                )}

                <View style={{ width: "100%" }}>
                    <View
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: SIZES.xxLarge,
                                textTransform: "capitalize",
                                color: COLORS.gray,
                                fontWeight: 600,
                            }}
                        >
                            {currentItem.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                color: COLORS.primary,
                                fontWeight: 400,
                            }}
                        >
                            ${currentItem.price}
                        </Text>
                    </View>
                    <Text
                        style={{
                            textTransform: "capitalize",
                            color: COLORS.primary,
                            paddingLeft: 20,
                        }}
                    >
                        {currentItem.country}
                    </Text>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        borderTopRightRadius: 40,
                    }}
                >
                    <View
                        style={{
                            width: "50%",
                        }}
                    >
                        <TouchableOpacity
                            // onPress={() => {
                            //     console.log("clicked");
                            // }}
                            style={{
                                backgroundColor: COLORS.primary,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopRightRadius: 40,
                                padding: 20,
                            }}
                        >
                            <Text style={{ color: COLORS.white }}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            width: "50%",
                            backgroundColor: COLORS.mainBg,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "100%",
                            }}
                        >
                            <Text>Description</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PlantDetails;
