import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack"
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";

type AuthRourtes = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigationRoutes = NativeStackNavigationProp<AuthRourtes>;

const { Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signIn" component={SignIn} />
            <Screen name="signUp" component={SignUp} />
        </Navigator>
    );
}