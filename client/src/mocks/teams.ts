import { TeamType } from "../types/enums";
import { Team } from "../types/types";
import { mockPlayers } from "./players";

export const mockTeams: Team[] = [
    {
        type: TeamType.HOME,
        players: mockPlayers.slice(0, 5),
    }, {
        type: TeamType.AWAY,
        players: mockPlayers.slice(5),
    }
];

