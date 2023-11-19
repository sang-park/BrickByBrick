import './App.scss';
import React, { useState } from 'react';
import TeamSetup from './components/TeamSetup';
import PlayerStats from './components/PlayerStats';
import { useTeamLogic } from './hooks/useTeamLogic';
import { mockTeams } from './mocks/teams';
import YoutubeWrapper from './components/YoutubeWrapper';
import Scoreboard from './components/Scoreboard';
import StatSelector from './components/StatSelector';
import { YtPlayerContext } from './context/YtPlayerContext';

function App() {
    const [ytPlayer, setYtPlayer] = useState<React.RefObject<any> | null>(null);

    const {
        teams,
        addPlayerToTeam,
    } = useTeamLogic(mockTeams);

    return (
        <div className="App">
            <YtPlayerContext.Provider value={ytPlayer}>
                <TeamSetup addPlayerToTeam={addPlayerToTeam} />
                <YoutubeWrapper setYtPlayer={setYtPlayer} />
                <Scoreboard />
                <StatSelector />
                <PlayerStats teams={teams} />
            </YtPlayerContext.Provider>
        </div>
    );
}

export default App;
