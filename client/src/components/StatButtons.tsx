import React from 'react';
import { StatType } from '../types/enums'

interface StatButtonsProps {
    onStatSelected: (stat: StatType) => void;
};

const StatButtons = ({ onStatSelected }: StatButtonsProps) => {

    return (
        <div className="stat-buttons">
            <button className="two-pt-made" onClick={() => onStatSelected(StatType.twoPointsMade)}>2 pt Made</button>
            <button className="two-pt-missed" onClick={() => onStatSelected(StatType.twoPointsMissed)}>2 pt Missed</button>
            <button className="three-pt-made" onClick={() => onStatSelected(StatType.threePointsMade)}>3 pt Made</button>
            <button className="three-pt-missed" onClick={() => onStatSelected(StatType.threePointsMissed)}>3 pt Missed</button>
            <button className="ast" onClick={() => onStatSelected(StatType.assists)}>Assist</button>
            <button className="oreb" onClick={() => onStatSelected(StatType.oRebounds)}>O-Rebound</button>
            <button className="stl" onClick={() => onStatSelected(StatType.steals)}>Steal</button>
            <button className="dreb" onClick={() => onStatSelected(StatType.dRebounds)}>D-Rebound</button>
            <button className="blk" onClick={() => onStatSelected(StatType.blocks)}>Block</button>
            <button className="to" onClick={() => onStatSelected(StatType.turnovers)}>Turnover</button>
        </div>
    );
}

export default StatButtons;
