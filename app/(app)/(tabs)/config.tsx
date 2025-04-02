import { StyleSheet, Image, Platform, Button } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Form from "@/components/form";
import { llmConfig } from "@/configs/form/llm";
import { useForm } from "react-hook-form";

export default function ConfigScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        // 模拟表单提交
        // console.log('Submitted Data:', data);
        // TODO: setToken mock token

        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        }).then(() => {
            // signIn("mock-token");
        });
    };

    return (
        <ThemedView
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Form formList={llmConfig} control={control} errors={errors} />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
});
