import { TeamType, StatType } from "./enums";


type Stat = {
    [key in StatType]?: number;
}

type StatLog = {
    playerId: number,
    statType: StatType,
    time: number,
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;


interface Player {
    id: number;
    name: string;
    number?: string;
    stats: Stat;
}

interface Team {
    type: TeamType;
    players: Player[];
}

export type { Stat, Player, Team, InputChangeEvent, StatLog }
