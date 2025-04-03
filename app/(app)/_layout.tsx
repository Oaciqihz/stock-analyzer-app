import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "../../components/ctx";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function AppLayout() {
    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sigin-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <React.Fragment>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            {/* <StatusBar style="auto" /> */}
        </React.Fragment>
    );
}
