import React, { useState } from 'react';
import { TeamType } from '../types/enums';
import { Player } from '../types/types';
import { getDefaultStatline } from '../utils/utils'

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
        <div>
            <div>
                <label>Select Team:</label>
                <select value={team} onChange={e => setTeam(e.target.value === TeamType.HOME ? TeamType.HOME : TeamType.AWAY)}>
                    <option value="Home">Home</option>
                    <option value="Away">Away</option>
                </select>
            </div>
            <div>
                <input
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value)}
                    placeholder="Player Name"
                />
                <input
                    value={playerNumber}
                    onChange={e => setPlayerNumber(e.target.value)}
                    placeholder="Player Number"
                />
                <button onClick={handleAddPlayer}>Add Player</button>
            </div>
        </div>
    );
}

export default TeamSetup;
