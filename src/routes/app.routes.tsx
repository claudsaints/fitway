import { createBottomTabNavigator,  BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { MaterialCommunityIcons} from "@expo/vector-icons/"; 
import { useTheme } from "@react-navigation/native";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

type AppRoutes = {
    home: undefined;
    history: undefined;
    exercise: undefined;
    profile: undefined;
}

const SIZE = 30;

export type AppNavigationRoutes = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
    const {colors, dark} = useTheme();

  return (
    <Navigator screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarActiveTintColor: colors.primary, 
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
            backgroundColor: dark ? colors.background : "#fcfcfc",
            borderTopWidth: 0,
            height: Platform.OS === "ios" ? 96 : 'auto',
            paddingBottom: 120,
            paddingTop: 6,
        }
    }}> 
        <Screen name="home" component={Home} options={{
            tabBarIcon: ({color}) => {
                return <MaterialCommunityIcons name="home" size={SIZE} color={color} />
            }
        }}/>
        <Screen name="history" component={History}
            options={{
                tabBarIcon: ({color}) => {
                    return <MaterialCommunityIcons name="history" size={SIZE} color={color} />
                }
            }}
        />
        <Screen name="profile" component={Profile}
            options={{
                tabBarIcon: ({color}) => {
                    return <MaterialCommunityIcons name="account" size={SIZE} color={color} />
                },
            }}
        />
        {/* <Screen name="exercise" component={Exercise}
             options={{
                tabBarButton: (props) => null,
            }}
        /> */}
    </Navigator>
  );
}