import React from 'react';
import { useTeamLogic } from '../hooks/useTeamLogic';
import { mockTeams } from '../mocks/teams';

const Scoreboard = () => {
    const {
        teams,
        getTeamScore,
    } = useTeamLogic(mockTeams);

    return (
        <div className="scoreboard-wrapper">
            {teams.map((team) => (
                <div key={team.type} className="scoreboard">
                    <div className="team-type">
                        {team.type}
                    </div>
                    <div className="team-score">
                        {getTeamScore(team)}
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Scoreboard;
