import { useCallback, useState } from "react";
import { Player, Team } from "../types/types";
import { TeamType } from "../types/enums";

function useTeamLogic(initialTeams: Team[]) {
    const [teams, setTeams] = useState<Team[]>(initialTeams);

    const addPlayerToTeam = useCallback((teamType: TeamType, player: Player) => {
        // Find the index of the team to which we want to add the player
        const teamIndex = teams.findIndex(team => team.type === teamType);

        // If the team doesn't exist, create it and add the player
        if (teamIndex === -1) {
            const newTeam: Team = {
                type: teamType,
                players: [player]
            };
            setTeams([...teams, newTeam]);
        } else {
            // If the team exists, add the player to it
            const updatedTeams = [...teams];
            updatedTeams[teamIndex].players.push(player);
            setTeams(updatedTeams);
        }
    }, [teams]);

    const getTeamScore = useCallback((team: Team) => {
        let score = 0;
        for (let player of team.players) {
            if (player.stats.twoPointsMade && player.stats.twoPointsMade > 0) {
                score += player.stats.twoPointsMade * 2;
            }
            if (player.stats.threePointsMade && player.stats.threePointsMade > 0) {
                score += player.stats.threePointsMade * 3;
            }
        }
        return score;
    }, []);

    return {
        teams,
        addPlayerToTeam,
        getTeamScore,
    };
}

export { useTeamLogic };