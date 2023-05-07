import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useStatbotics } from "../../statbotics";
import { useEffect, useState } from "react";
import { Team } from "../../types/team";
import { TeamRank } from "../../components/rank/TeamRank";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export const RankScreen = () => {
	const { getTeams } = useStatbotics();
	const [teams, setTeams] = useState<Team[]>();

	useEffect(() => {
		getTeams().then((teams) => {
			setTeams(teams);
		});
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				{teams != null ? (
					teams.map((t) => <TeamRank {...t} key={t.team.toString()} />)
				) : (
					<Text>No Teams Found</Text>
				)}
			</ScrollView>
		</View>
	);
};
