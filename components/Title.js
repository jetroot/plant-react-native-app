import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Title = ({ titleText, btnText }) => {
    return (
        <View
            style={{
                padding: 25,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Text style={{ color: COLORS.gray, fontWeight: 500, fontSize: 15 }}>
                {titleText}
            </Text>
            <TouchableOpacity
                onPress={() => {}}
                style={{
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: 18,
                    paddingVertical: 4,
                    borderRadius: 100,
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        textTransform: "capitalize",
                        fontWeight: 500,
                    }}
                >
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Title;
