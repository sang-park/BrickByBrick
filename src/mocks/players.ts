import { StatType } from "../types/enums";

const playerOne = {
    id: 1,
    name: "Sang",
    number: "13",
    stats: {
        [StatType.twoPointsMade]: 5,
        [StatType.twoPointsMissed]: 3,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 4,
        [StatType.oRebounds]: 5,
        [StatType.dRebounds]: 6,
        [StatType.assists]: 7,
        [StatType.steals]: 8,
        [StatType.blocks]: 9,
        [StatType.turnovers]: 0,
    }
};

const playerTwo = {
    id: 2,
    name: "Kenny",
    number: "0",
    stats: {
        [StatType.twoPointsMade]: 4,
        [StatType.twoPointsMissed]: 6,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 4,
        [StatType.oRebounds]: 6,
        [StatType.dRebounds]: 5,
        [StatType.assists]: 4,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerThree = {
    id: 3,
    name: "Bryce",
    number: "11",
    stats: {
        [StatType.twoPointsMade]: 2,
        [StatType.twoPointsMissed]: 5,
        [StatType.threePointsMade]: 1,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerFour = {
    id: 4,
    name: "Jeff",
    number: "25",
    stats: {
        [StatType.twoPointsMade]: 4,
        [StatType.twoPointsMissed]: 2,
        [StatType.threePointsMade]: 3,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerFive = {
    id: 5,
    name: "Andrew",
    number: "7",
    stats: {
        [StatType.twoPointsMade]: 4,
        [StatType.twoPointsMissed]: 2,
        [StatType.threePointsMade]: 3,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerSix = {
    id: 6,
    name: "Rodell",
    number: "15",
    stats: {
        [StatType.twoPointsMade]: 6,
        [StatType.twoPointsMissed]: 2,
        [StatType.threePointsMade]: 3,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
}
const playerSeven = {
    id: 7,
    name: "Mike",
    number: "23",
    stats: {
        [StatType.twoPointsMade]: 5,
        [StatType.twoPointsMissed]: 3,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerEight = {
    id: 8,
    name: "Max",
    number: "16",
    stats: {
        [StatType.twoPointsMade]: 5,
        [StatType.twoPointsMissed]: 3,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerNine = {
    id: 9,
    name: "Timmy",
    number: "1",
    stats: {
        [StatType.twoPointsMade]: 5,
        [StatType.twoPointsMissed]: 3,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};
const playerTen = {
    id: 10,
    name: "Kevin",
    number: "00",
    stats: {
        [StatType.twoPointsMade]: 5,
        [StatType.twoPointsMissed]: 3,
        [StatType.threePointsMade]: 2,
        [StatType.threePointsMissed]: 2,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 2,
        [StatType.steals]: 3,
        [StatType.blocks]: 2,
        [StatType.turnovers]: 1,
    }
};

const mockPlayers = [playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
    playerSix,
    playerSeven,
    playerEight,
    playerNine,
    playerTen]

export { mockPlayers };