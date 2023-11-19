import React from 'react';
import { useTeamLogic } from '../hooks/useTeamLogic';
import { mockTeams } from '../mocks/teams';

const Scoreboard = () => {
    const {
        teams,
        getTeamScore,
    } = useTeamLogic(mockTeams);

    return (
        <div>
            total points:
            {teams.map((team) => (
                <div key={team.type}>
                    {team.type}: {getTeamScore(team)}
                </div>
            ))}
        </div>

    );
}

export default Scoreboard;
