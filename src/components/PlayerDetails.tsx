import React from 'react';
import { StatType } from '../types/enums';
import { Player } from '../types/types';

interface PlayerDetailsProps {
    player: Player;
}

const PlayerDetails = ({ player }: PlayerDetailsProps) => {
    let twoPointMade = player.stats[StatType.twoPointsMade] || 0;
    let twoPointMissed = player.stats[StatType.twoPointsMissed] || 0;
    let threePointMade = player.stats[StatType.threePointsMade] || 0;
    let threePointMissed = player.stats[StatType.threePointsMissed] || 0;
    let oReb = player.stats[StatType.oRebounds] || 0;
    let dReb = player.stats[StatType.dRebounds] || 0;
    let tReb = oReb + dReb;

    const getFieldGoalsAttempted = () => {
        return twoPointMade + twoPointMissed + threePointMade + threePointMissed;
    }

    const getFieldGoalsMade = () => {
        return twoPointMade + threePointMade;
    }

    const getThreePointAttempted = () => {
        return threePointMade + threePointMissed;
    }

    const getTotalPoints = () => {
        return threePointMade * 3 + twoPointMade * 2;
    }

    return (
        <tr>
            <td>{player.number}</td>
            <td>{player.name}</td>
            <td>{getTotalPoints()}</td>
            <td>{getFieldGoalsMade()}</td>
            <td>{getFieldGoalsAttempted()}</td>
            <td>{threePointMade}</td>
            <td>{getThreePointAttempted()}</td>
            <td>{oReb}</td>
            <td>{dReb}</td>
            <td>{tReb}</td>
            <td>{player.stats[StatType.assists] || 0}</td>
            <td>{player.stats[StatType.steals] || 0}</td>
            <td>{player.stats[StatType.blocks] || 0}</td>
            <td>{player.stats[StatType.turnovers] || 0}</td>
        </tr>
    );
}

export default PlayerDetails;
