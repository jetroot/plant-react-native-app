import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { useRouter } from "expo-router";

const Card = ({ id, image, name, price, country, size }) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.push(`/plant-details/${id}`)}
            style={{
                width: size,
                borderRadius: SIZES.small,
                backgroundColor: COLORS.white,
                marginRight: 20,
            }}
        >
            <Image
                source={image}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 180,
                    borderTopLeftRadius: SIZES.small,
                    borderTopRightRadius: SIZES.small,
                }}
            />
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.gray,
                        opacity: 0.9,
                        textTransform: "uppercase",
                    }}
                >
                    {name}
                </Text>

                <Text style={{ color: COLORS.primary }}>${price}</Text>
            </View>

            <Text
                style={{
                    textTransform: "uppercase",
                    color: COLORS.primary,
                    opacity: 0.5,
                    paddingLeft: 7,
                    paddingBottom: 10,
                }}
            >
                {country}
            </Text>
        </TouchableOpacity>
        // </View>
    );
};

export default Card;
