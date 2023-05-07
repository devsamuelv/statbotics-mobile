import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { RankScreen } from "./views/ranks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MatchesScreen } from "./views/matches";

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === "Ranks") {
							return (
								<Ionicons
									name={focused ? "trophy" : "trophy-outline"}
									size={size}
									color={color}
								/>
							);
						} else if (route.name === "Matches") {
							return (
								<Ionicons
									name={focused ? "list" : "list-outline"}
									size={size}
									color={color}
								/>
							);
						}
					},
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen name="Ranks" component={RankScreen} />
				<Tab.Screen name="Matches" component={MatchesScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
