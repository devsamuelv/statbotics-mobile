import { View, Text, StyleSheet } from "react-native";
import { Team } from "../../types/team";

const styles = StyleSheet.create({
	container: {
		borderRadius: 7,
		marginVertical: 10,
		paddingBottom: 20,
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: "#e4e4e4",
	},

	details: {
		flexDirection: "row",
		columnGap: 5,
	},
	details_text: {
		fontSize: 13,
	},
});

export const TeamRank = ({ name, team, winrate, norm_epa_recent }: Team) => {
	return (
		<View style={styles.container}>
			<Text>
				{team.toString()}: {name}
			</Text>

			<View style={styles.details}>
				<Text style={styles.details_text}>
					Epa: {norm_epa_recent.toString()}
				</Text>
				<Text style={styles.details_text}>
					Win Rate: {(winrate * 100).toString().slice(0, 5)}
				</Text>
			</View>
		</View>
	);
};
