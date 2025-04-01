import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Link, useLocalSearchParams } from "expo-router"
import { useEffect } from "react";



const ActicityDetailPage = (props: any) => {

    const { id } = useLocalSearchParams();

    useEffect(() => {
        console.log(id);
        
    },[id])

    return (
        <ThemedView>
            <Link href="/news" >xxxx</Link>
            <ThemedText>
            {JSON.stringify(props)}
            {id}
                Activity Detail Page
            </ThemedText>
        </ThemedView>
    )
}

export default ActicityDetailPage