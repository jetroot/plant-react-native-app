import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const Header = () => {
    return (
        <TouchableOpacity style={{ flex: 1 }}>
            <Image source={icons.menu} />
        </TouchableOpacity>
    );
};

export default Header;
