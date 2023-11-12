import { useCallback, useState } from "react";
import { Team } from "../types/types";
import { StatType, TeamType } from "../types/enums";

function usePlayerLogic(initialTeams: Team[]) {
    const [teams, setTeams] = useState<Team[]>(initialTeams);
    const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

    const handleStatSelection = useCallback((stat: StatType) => {
        setSelectedStat(stat);
    }, []);

    return {
        selectedStat,
        handleStatSelection,
        setTeams,
        setSelectedStat,
    };
}

export { usePlayerLogic };