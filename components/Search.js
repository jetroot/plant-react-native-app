import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, icons } from "../constants";

const Search = () => {
    return (
        <View
            style={[
                {
                    // backgroundColor: COLORS.white,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90%",
                    borderRadius: 100,
                    // paddingHorizontal: 10,
                    backgroundColor: COLORS.white,
                    padding: 10,
                },
                SHADOWS.medium,
            ]}
        >
            <View style={{ width: "80%" }}>
                <TextInput
                    style={{
                        // backgroundColor: "blue",
                        // width: "90%",
                        // height: "100%",

                        marginLeft: 10,
                    }}
                    // onChangeText={() => {}}
                    value=""
                    placeholder="Search ..."
                />
            </View>

            <View style={{ width: "10%" }}>
                <Image source={icons.search} />
            </View>
        </View>
    );
};

export default Search;
