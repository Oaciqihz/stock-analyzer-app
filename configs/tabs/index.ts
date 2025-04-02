import { IconSymbolName } from "@/components/ui/IconSymbol";

interface RouterProps {
    name: string;
    options: {
        title: string;
        tabBarIcon: IconSymbolName;
    }
}

export const router: RouterProps[] = [
    {
        name: 'index',
        options: {
            title: 'Home',
            tabBarIcon: "house.fill",
        }
    },{
        name: 'explore',
        options: {
            title: 'Explore',
            tabBarIcon: "paperplane.fill",
        }
    },{
        name: 'news',
        options: {
            title: 'News',
            tabBarIcon: "newspaper.fill",
        }
    },{
        name: 'config',
        options: {
            title: 'Config',
            tabBarIcon: "gearshape.fill",
        }
    }
]