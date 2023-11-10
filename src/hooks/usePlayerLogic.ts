import { useCallback, useState } from "react";
import { Team } from "../types/types";
import { StatType, TeamType } from "../types/enums";

function usePlayerLogic(initialTeams: Team[]) {
    const [teams, setTeams] = useState<Team[]>(initialTeams);
    const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

    const handleStatSelection = useCallback((stat: StatType) => {
        setSelectedStat(stat);
    }, []);

    const updatePlayerStat = useCallback((teamType: TeamType, playerId: number) => {
        // Find the index of the team and player to update the stat
        const teamIndex = teams.findIndex(team => team.type === teamType);
        const playerIndex = teams[teamIndex].players.findIndex(player => player.id === playerId);

        const updatedTeams = [...teams];
        const player = updatedTeams[teamIndex].players[playerIndex];

        if (selectedStat) {
            player.stats[selectedStat] = (player.stats[selectedStat] || 0) + 1;
        }

        setTeams(updatedTeams);
        setSelectedStat(null); // reset the selected stat after updating
    }, [teams, selectedStat]);

    return {
        selectedStat,
        handleStatSelection,
        setTeams,
        setSelectedStat,
    };
}

export { usePlayerLogic };