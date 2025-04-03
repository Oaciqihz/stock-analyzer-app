import React from "react";
import { ThemedView } from "../ThemedView";
import { Controller, Control, FieldValues } from "react-hook-form";
import { StyleProp, TextInput, useColorScheme, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { StyleSheet } from "react-native";

export default function Form({
    formList,
    control,
    errors,
    style,
    itemStyle
}: {
    formList: Type.Form[];
    control: Control<FieldValues, any, FieldValues>;
    errors: any;
    style?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
}) {
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={style ? style : styles.container}>
            {formList.map((item, index) => (
                <ThemedView key={item.name} style={itemStyle}>
                    <Controller
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                {...field}
                                style={{
                                    ...styles.input,
                                    color:
                                        colorScheme === "dark" ? "white" : "",
                                }}
                                placeholder={item?.placeholder}
                            />
                        )}
                        name={item.name}
                        rules={item.rule} // { required: "You must enter your name" }
                    />
                    {errors[item.name] && (
                        <ThemedText style={styles.errorText}>
                            {errors[item.name]?.message}
                        </ThemedText>
                    )}
                </ThemedView>
            ))}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        // marginBottom: 10,
        padding: 8,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    submittedContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    submittedTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
});
