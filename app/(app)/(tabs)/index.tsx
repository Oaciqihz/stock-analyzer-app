import { StyleSheet, Button } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import Form from "@/components/form";
import { stockConfig } from "@/configs/form/stock";
import { useForm } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

// TODO: 改為判斷是否有 llm config  ?  輸入框 : 輸入股票配置
export default function HomeScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [stockLength, setStockLength] = useState(1);

    function stockAnalyzer(data: any) {
        console.log(data);
    }

    return (
        <ThemedView style={{height: "100%"}}>
            <ThemedView style={styles.setting}>
                <Link href="/config">
                    <FontAwesome
                        size={28}
                        name="cog"
                        color="white"
                    />
                </Link>
            </ThemedView>
            {Array.from({ length: stockLength }, (_, i) => (
                <Form
                    formList={stockConfig.map((item) => ({
                        ...item,
                        name: item.name + i,
                    }))}
                    control={control}
                    errors={errors}
                    style={styles.formItem}
                    itemStyle={styles.formItemInput}
                />
            ))}
            <ThemedView style={styles.footer}>
                <Button
                    title="Add"
                    onPress={() => setStockLength(stockLength + 1)}
                />
                <Button
                    title="Get Result"
                    onPress={handleSubmit(stockAnalyzer)}
                />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    formItem: {
        width: "100%",
        paddingInline: 16,
        marginTop: 16,
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    formItemInput: {
        flex: 1,
    },
    footer: {
        margin: 16,
        display: "flex",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    setting: {
        paddingRight: 16,
        position: "absolute",
        bottom: "20%",
        right: 0,
        zIndex: 100
    }
});
