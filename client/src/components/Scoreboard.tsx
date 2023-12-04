import React from 'react';
import { useTeamLogic } from '../hooks/useTeamLogic';
import { Team } from '../types/types';

interface ScoreboardProps {
    teams: Team[];
};
const Scoreboard = ({ teams }: ScoreboardProps) => {
    const {
        getTeamScore,
    } = useTeamLogic([]);

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
