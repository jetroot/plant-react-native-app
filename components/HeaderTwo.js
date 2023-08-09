import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../constants";
import { Image } from "react-native";
import Search from "./Search";

const HeaderTwo = () => {
    return (
        <>
            <View style={{ position: "relative", backgroundColor: "#f4f4f4" }}>
                <View
                    style={{
                        padding: SIZES.xLarge,
                        backgroundColor: COLORS.primary,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        display: "flex",
                        // paddingVertical: 50,
                        // backgroundColor: "red",
                        borderBottomLeftRadius: SIZES.xxLarge,
                        borderBottomRightRadius: SIZES.xxLarge,
                        paddingBottom: 50,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: SIZES.xLarge,
                            fontWeight: 500,
                        }}
                    >
                        Hi UiShopy!
                    </Text>

                    <Image
                        style={{ width: 50, height: 50 }}
                        source={images.logo}
                    />
                </View>

                <View
                    style={{
                        position: "absolute",
                        bottom: -30,

                        // flex: 1,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <Search />
                </View>
            </View>
        </>
    );
};

export default HeaderTwo;
