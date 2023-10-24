import React from 'react';
import PlayerDetails from './PlayerDetails';
import { Team } from '../types/types';

interface PlayerStatsProps {
    teams: Team[];
};

const PlayerStats = ({ teams }: PlayerStatsProps) => {
    return (
        <div>
            {teams.map((team: Team, teamIndex: number) => (
                <div key={teamIndex}>
                    <h2>{team.type}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>FGM</th>
                                <th>FGA</th>
                                <th>3PTM</th>
                                <th>3PTA</th>
                                <th>OR</th>
                                <th>DR</th>
                                <th>TR</th>
                                <th>AST</th>
                                <th>STL</th>
                                <th>BLK</th>
                                <th>TO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.players.map(player => (
                                <PlayerDetails key={player.id} player={player} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default PlayerStats;
