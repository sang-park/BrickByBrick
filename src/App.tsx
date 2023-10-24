import './App.scss';
import React, { useEffect, useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import StatButtons from './components/StatButtons';
import TeamSetup from './components/TeamSetup';
import PlayerStats from './components/PlayerStats';
import { Player, Team } from './types/types';
import { TeamType, StatType } from './types/enums';
import PlayerSelect from './components/PlayerSelect';
import { mockTeams } from './mocks/teams';


function App() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

    // use mock teams for local dev
    useEffect(() => {
        setTeams(mockTeams);
    }, [])

    const handleStatSelection = (stat: StatType) => {
        setSelectedStat(stat);
    };

    const updatePlayerStat = (teamType: TeamType, playerId: number) => {
        // Find the index of the team and player to update the stat
        const teamIndex = teams.findIndex(team => team.type === teamType);
        const playerIndex = teams[teamIndex].players.findIndex(player => player.id === playerId);

        const updatedTeams = [...teams];
        const player = updatedTeams[teamIndex].players[playerIndex];

        if (selectedStat) {
            console.log(selectedStat);
            player.stats[selectedStat] = (player.stats[selectedStat] || 0) + 1;
        }

        setTeams(updatedTeams);
        setSelectedStat(null); // reset the selected stat after updating
    };

    const addPlayerToTeam = (teamType: TeamType, player: Player) => {
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
    };

    const getTeamScore = (team: Team) => {
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
    }

    return (
        <div className="App">
            <TeamSetup addPlayerToTeam={addPlayerToTeam} />
            <VideoPlayer />
            <div>
                total points:

                {teams.map((team) => (<div>{team.type}: {getTeamScore(team)}</div>))}
            </div>
            <div className="player-select-wrapper">
                {selectedStat ? (
                    teams.map((team: Team) => <PlayerSelect team={team} updatePlayerStat={updatePlayerStat} />)
                ) : (
                    <>
                        <StatButtons onStatSelected={handleStatSelection} />
                    </>
                )}
            </div>


            <PlayerStats teams={teams} />

        </div>
    );
}

export default App;
