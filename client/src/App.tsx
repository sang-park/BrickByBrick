import './App.scss';
import React, { useState, Ref } from 'react';
import VideoPlayer from './components/VideoPlayer';
import StatButtons from './components/StatButtons';
import TeamSetup from './components/TeamSetup';
import PlayerStats from './components/PlayerStats';
import PlayerSelect from './components/PlayerSelect';
import { useTeamLogic } from './hooks/useTeamLogic';
import { usePlayerLogic } from './hooks/usePlayerLogic';
import { mockTeams } from './mocks/teams';
import YoutubeWrapper from './components/YoutubeWrapper';
import { TeamType } from './types/enums';
import { StatLog } from './types/types';

function App() {
    const [ytPlayer, setYtPlayer] = useState<React.RefObject<any> | null>(null);
    const [statLog, setStatLog] = useState<StatLog[]>([]);

    const {
        teams,
        addPlayerToTeam,
        getTeamScore,
    } = useTeamLogic(mockTeams);

    const {
        selectedStat,
        handleStatSelection,
        setTeams,
        setSelectedStat,
    } = usePlayerLogic(teams);

    const updatePlayerStat = (teamType: TeamType, playerId: number) => {
        // Find the index of the team and player to update the stat
        const teamIndex = teams.findIndex(team => team.type === teamType);
        const playerIndex = teams[teamIndex].players.findIndex(player => player.id === playerId);

        const updatedTeams = [...teams];
        const player = updatedTeams[teamIndex].players[playerIndex];

        console.log(Math.round(ytPlayer?.current.getCurrentTime()));

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
        <div className="App">
            <TeamSetup addPlayerToTeam={addPlayerToTeam} />
            <YoutubeWrapper setYtPlayer={setYtPlayer} />
            <div>
                total points:
                {teams.map((team) => (
                    <div key={team.type}>
                        {team.type}: {getTeamScore(team)}
                    </div>
                ))}
            </div>
            <div className="player-select-wrapper">
                {selectedStat ? (
                    teams.map((team) => (
                        <PlayerSelect key={team.type} team={team} updatePlayerStat={updatePlayerStat} />
                    ))
                ) : (
                    <StatButtons onStatSelected={handleStatSelection} />
                )}
            </div>

            {statLog.map((stat) => <div>{stat.playerId} {stat.statType} {stat.time}</div>)}

            <PlayerStats teams={teams} />
        </div>
    );
}

export default App;
