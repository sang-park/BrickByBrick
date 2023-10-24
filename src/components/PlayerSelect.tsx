import React from 'react';
import { Team } from '../types/types';
import { TeamType } from '../types/enums';

interface PlayerSelectProps {
    team: Team;
    updatePlayerStat: (teamType: TeamType, playerId: number) => void;
}

const PlayerSelect = ({ team, updatePlayerStat }: PlayerSelectProps) => {

    return (
        <div key={team.type} className="team">
            <div className="team-name">{team.type}</div>
            <div className="player-list">
                {team.players.map(player => (
                    <div key={player.id} className="player" onClick={() => updatePlayerStat(team.type, player.id)}>
                        {player.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerSelect;
