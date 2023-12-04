import React, { useState } from 'react';
import { TeamType } from '../types/enums';
import { Player } from '../types/types';
import { getDefaultStatline } from '../utils/utils'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface TeamSetupProp {
    addPlayerToTeam: (teamType: TeamType, player: Player) => void;
}

const TeamSetup = ({ addPlayerToTeam }: TeamSetupProp) => {
    const [playerName, setPlayerName] = useState("");
    const [playerNumber, setPlayerNumber] = useState("");
    const [team, setTeam] = useState<TeamType>(TeamType.HOME);

    const handleAddPlayer = () => {
        if (playerName) {
            const newPlayer: Player = {
                id: new Date().getTime(),
                name: playerName,
                number: playerNumber,
                stats: getDefaultStatline(),
            };

            // Directly add the player to the selected team
            addPlayerToTeam(team, newPlayer);

            // Clear the inputs
            setPlayerName("");
            setPlayerNumber("");
        }
    };

    return (
        <div className="team-setup">
            <Select
                value={team}
                onChange={e => setTeam(e.target.value as TeamType)}
            >
                <MenuItem value={TeamType.HOME}>Home</MenuItem>
                <MenuItem value={TeamType.AWAY}>Away</MenuItem>
            </Select>
            <TextField
                id="standard-basic"
                label="Player Name"
                variant="outlined"
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
            />
            <TextField
                id="standard-basic"
                label="Player Number"
                variant="outlined"
                value={playerNumber}
                onChange={e => setPlayerNumber(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddPlayer}>Add Player</Button>
        </div>
    );
}

export default TeamSetup;
