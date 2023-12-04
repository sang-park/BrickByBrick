import { useCallback, useState } from "react";
import { Team } from "../types/types";
import { StatType } from "../types/enums";

function usePlayerLogic(initialTeams: Team[]) {
    const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

    const handleStatSelection = useCallback((stat: StatType) => {
        setSelectedStat(stat);
    }, []);

    const resetSelection = () => {
        setSelectedStat(null);
    };

    return {
        selectedStat,
        handleStatSelection,
        setSelectedStat,
        resetSelection,
    };
}

export { usePlayerLogic };