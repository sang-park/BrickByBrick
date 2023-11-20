import React from 'react';
import { Team } from '../types/types';
import { TeamType } from '../types/enums';
import { Button } from '@mui/material';

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
                    <Button
                        key={player.id}
                        className="player"
                        variant="contained"
                        color={team.type == TeamType.HOME ? "primary" : "secondary"}
                        onClick={() => updatePlayerStat(team.type, player.id)}>
                        {player.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default PlayerSelect;
