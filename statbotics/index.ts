import axios from "axios"
import { Team } from "../types/team";

export const useStatbotics = () => {
  const getTeams = async (): Promise<Team[]> => {
    const { data, status } = await axios.get<Team[]>("https://api.statbotics.io/v2/teams?active=true&metric=winrate&ascending=false&limit=100&offset=0");

    return data;
  }

  return {
    getTeams
  }
}