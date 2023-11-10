import { StatType } from "../types/enums";

const createRandomStat = (max: number = 12) => {
    return Math.round(Math.random() * max);
}

const createRandomStats = () => {
    return {
        [StatType.twoPointsMade]: createRandomStat(),
        [StatType.twoPointsMissed]: createRandomStat(),
        [StatType.threePointsMade]: createRandomStat(),
        [StatType.threePointsMissed]: createRandomStat(),
        [StatType.oRebounds]: createRandomStat(),
        [StatType.dRebounds]: createRandomStat(),
        [StatType.assists]: createRandomStat(),
        [StatType.steals]: createRandomStat(),
        [StatType.blocks]: createRandomStat(),
        [StatType.turnovers]: createRandomStat()
    };
}

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
    stats: createRandomStats(),
};
const playerFour = {
    id: 4,
    name: "Jeff",
    number: "25",
    stats: createRandomStats(),
};
const playerFive = {
    id: 5,
    name: "Andrew",
    number: "7",
    stats: createRandomStats(),
};
const playerSix = {
    id: 6,
    name: "Rodell",
    number: "15",
    stats: createRandomStats(),
}
const playerSeven = {
    id: 7,
    name: "Mike",
    number: "23",
    stats: createRandomStats(),
};
const playerEight = {
    id: 8,
    name: "Max",
    number: "16",
    stats: createRandomStats(),
};
const playerNine = {
    id: 9,
    name: "Timmy",
    number: "1",
    stats: createRandomStats(),
};
const playerTen = {
    id: 10,
    name: "Kevin",
    number: "00",
    stats: createRandomStats(),
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