import React from 'react';
import { StatType } from '../types/enums'
import AllStatMetadata from '../constants/AllStatMetadata';
import StatButton from './StatButton';

interface StatButtonsProps {
    onStatSelected: (stat: StatType) => void;
};

const StatButtons = ({ onStatSelected }: StatButtonsProps) => {
    return (
        <div className="stat-buttons">
            {AllStatMetadata.map((statMetadata) => (
                <StatButton statMetadata={statMetadata} onStatSelected={onStatSelected} />
            ))}
        </div>
    );
}

export default StatButtons;
