import { View, Text } from "react-native";

interface PrimaryButtonProps {
    title: string;
}

export const PrimaryButton = ({
    title
}: PrimaryButtonProps) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};