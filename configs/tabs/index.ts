import { IconSymbolName } from "@/components/ui/IconSymbol";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface RouterProps {
    name: string;
    options: {
        title: string;
        tabBarIcon?: keyof typeof FontAwesome.glyphMap;
        href?: any;
    }
}

export const router: RouterProps[] = [
    {
        name: 'index',
        options: {
            title: 'Home',
            tabBarIcon: "home",
        }
    },{
        name: 'explore',
        options: {
            title: 'Explore',
            href: null
        }
    },{
        name: 'news',
        options: {
            title: 'News',
            tabBarIcon: "newspaper-o",
        }
    },
    {
        name: 'config',
        options: {
            href: null,
            title: 'Config',
            tabBarIcon: "cog",
        }
    }
]