import React, { useState } from 'react';
import { useTeamLogic } from '../hooks/useTeamLogic';
import { mockTeams } from '../mocks/teams';
import PlayerSelect from './PlayerSelect';
import StatButtons from './StatButtons';
import { usePlayerLogic } from '../hooks/usePlayerLogic';
import { TeamType } from '../types/enums';
import { StatLog } from '../types/types';
import { useYtPlayer } from '../context/YtPlayerContext';

interface StatSelectorProps {
}

const StatSelector = () => {
    const [statLog, setStatLog] = useState<StatLog[]>([]);

    const {
        teams,
    } = useTeamLogic(mockTeams);

    const {
        selectedStat,
        setTeams,
        setSelectedStat,
        handleStatSelection,
    } = usePlayerLogic(teams);

    const ytPlayer = useYtPlayer();

    const updatePlayerStat = (teamType: TeamType, playerId: number) => {
        // Find the index of the team and player to update the stat
        const teamIndex = teams.findIndex(team => team.type === teamType);
        const playerIndex = teams[teamIndex].players.findIndex(player => player.id === playerId);

        const updatedTeams = [...teams];
        const player = updatedTeams[teamIndex].players[playerIndex];

        if (selectedStat) {
            player.stats[selectedStat] = (player.stats[selectedStat] || 0) + 1;
        }
        if (selectedStat && ytPlayer && ytPlayer.current) {
            const currentTime = Math.round(ytPlayer.current.getCurrentTime());
            const curStat: StatLog = {
                statType: selectedStat,
                playerId: playerId,
                time: currentTime
            }
            setStatLog((prev) => [...prev, curStat]);
        }

        setTeams(updatedTeams);
        setSelectedStat(null); // reset the selected stat after updating
    };


    return (
        <>
            <div className="player-select-wrapper">
                {selectedStat ? (
                    teams.map(team => (
                        <PlayerSelect key={team.type} team={team} updatePlayerStat={updatePlayerStat} />
                    ))
                ) : (
                    <StatButtons onStatSelected={handleStatSelection} />
                )}
            </div>
            <div className='log-list'>
                {statLog.map((stat) => <div>{stat.playerId} {stat.statType} {stat.time}</div>)}
            </div>
        </>
    );
}

export default StatSelector;
