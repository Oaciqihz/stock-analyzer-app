import { Image, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import Form from "@/components/form";
import { stockConfig } from "@/configs/form/stock";
import { useForm } from "react-hook-form";

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
        <ThemedView>
            {Array.from({ length: stockLength }, (_, i) => (
                <Form
                    formList={stockConfig.map((item) => ({...item, name: item.name+i}))}
                    control={control}
                    errors={errors}
                    style={styles.formItem}
                    itemStyle={styles.formItemInput}
                />
            ))}
            <ThemedView style={styles.footer}>
              <Button title="Add" onPress={() => setStockLength(stockLength+1)} />
              <Button title="Get Result" onPress={handleSubmit(stockAnalyzer)} />
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
      gap: 8
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
});
