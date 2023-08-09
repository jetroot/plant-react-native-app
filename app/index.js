import { Stack } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../constants/theme";
import HeaderTwo from "../components/HeaderTwo";
import Title from "../components/Title";
import Card from "../components/Card";
import { data } from "../constants/dummy";

const Home = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.mainBg,
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                        height: 300,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <Header />,
                    headerTitle: "",
                }}
            />

            <HeaderTwo />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 40,
                    backgroundColor: "#f4f4f4",
                }}
            >
                <Title titleText={"Recommended"} btnText={"More"} />

                <View
                    style={{
                        paddingHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        // backgroundColor: "red",
                    }}
                >
                    <FlatList
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={({ item }) => (
                            <Card
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                country={item.country}
                                size={170}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <Title titleText={"Featured Plants"} btnText={"More"} />

                <View
                    style={{
                        paddingHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        paddingBottom: 20,
                        width: "100%",
                    }}
                >
                    <FlatList
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={({ item }) => (
                            <Card
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                country={item.country}
                                size={280}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>

            {/* <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: COLORS.white,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        router.push("/plant-details/123");
                    }}
                >
                    <Image source={icons.flower} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.heartIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.userIcon} />
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

export default Home;
