import React, { useEffect, useState } from 'react';
import { Player, Team } from '../types/types';
import { DataGrid } from '@mui/x-data-grid';
import { StatType } from '../types/enums';
import { playerStatHeaders } from '../constants/PlayerDataTableConfig';


interface PlayerStatsProps {
    teams: Team[];
};

const PlayerStats = ({ teams }: PlayerStatsProps) => {
    const [currentTeams, setCurrentTeams] = useState<Team[]>([]);

    useEffect(() => {
        setCurrentTeams(teams);
    }, [teams]);

    function getStat(player: Player, statType: StatType): number {
        return player.stats[statType] || 0;
    }
    const getTotalPoints = (player: Player) => {
        return getStat(player, StatType.threePointsMade) * 3 + getStat(player, StatType.twoPointsMade) * 2;
    }
    const getFieldGoalsMade = (player: Player) => {
        return getStat(player, StatType.threePointsMade) + getStat(player, StatType.twoPointsMade);
    }
    const getFieldGoalsAttempted = (player: Player) => {
        return getFieldGoalsMade(player) + getStat(player, StatType.threePointsMissed) + getStat(player, StatType.twoPointsMissed);
    }
    const getThreePointAttempted = (player: Player) => {
        return getStat(player, StatType.threePointsMade) + getStat(player, StatType.threePointsMissed);
    }
    const getFreeThrowAttempted = (player: Player) => {
        return getStat(player, StatType.freeThrowsMade) + getStat(player, StatType.freeThrowsMissed);
    }

    const playerToRow = (player: Player) => {
        let oReb = getStat(player, StatType.oRebounds);
        let dReb = getStat(player, StatType.dRebounds);
        let tReb = oReb + dReb;

        return {
            id: player.id,
            number: player.number,
            name: player.name,
            pts: getTotalPoints(player),
            fgm: getFieldGoalsMade(player),
            fga: getFieldGoalsAttempted(player),
            '3ptm': getStat(player, StatType.threePointsMade),
            '3pta': getThreePointAttempted(player),
            ftm: getStat(player, StatType.freeThrowsMade),
            fta: getFreeThrowAttempted(player),
            oReb,
            dReb,
            tReb,
            ast: getStat(player, StatType.assists),
            stl: getStat(player, StatType.steals),
            blk: getStat(player, StatType.blocks),
            to: getStat(player, StatType.turnovers),
        }
    }

    return (
        <div className='player-stats-wrapper'>
            {currentTeams.map(team => (
                <DataGrid
                    rows={team.players.map(player => playerToRow(player))}
                    columns={playerStatHeaders}
                />
            ))};
        </div>
    );
}

export default PlayerStats;
