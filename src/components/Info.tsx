import { View, Text } from "react-native";
import React from "react";

interface InfoProps {
  label: string;
  description: string;
  width: number;
}
const Info = ({ label, description, width }: InfoProps) => {
  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#46BB6D",
          paddingRight: 12,
          width,
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            lineHeight: 26,
            color: "#2C3D31",
          }}
        >
          {label}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#4A4A4A",
          textAlign: "justify",
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default Info;
