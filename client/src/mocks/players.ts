import { StatType } from "../types/enums";
import { Player, StatLog } from "../types/types";

const getDefaultStats = () => {
    return {
        [StatType.twoPointsMade]: 0,
        [StatType.twoPointsMissed]: 0,
        [StatType.threePointsMade]: 0,
        [StatType.threePointsMissed]: 0,
        [StatType.freeThrowsMissed]: 0,
        [StatType.freeThrowsMade]: 0,
        [StatType.oRebounds]: 0,
        [StatType.dRebounds]: 0,
        [StatType.assists]: 0,
        [StatType.steals]: 0,
        [StatType.blocks]: 0,
        [StatType.turnovers]: 0
    };
}

const playerOne = {
    id: 1,
    name: "Sang",
    number: "13",
    stats: getDefaultStats(),
};

const playerTwo = {
    id: 2,
    name: "Kenny",
    number: "0",
    stats: getDefaultStats(),
};
const playerThree = {
    id: 3,
    name: "Bryce",
    number: "11",
    stats: getDefaultStats(),
};
const playerFour = {
    id: 4,
    name: "Jeff",
    number: "25",
    stats: getDefaultStats(),
};
const playerFive = {
    id: 5,
    name: "Andrew",
    number: "7",
    stats: getDefaultStats(),
};
const playerSix = {
    id: 6,
    name: "Rodell",
    number: "15",
    stats: getDefaultStats(),
}
const playerSeven = {
    id: 7,
    name: "Mike",
    number: "23",
    stats: getDefaultStats(),
};
const playerEight = {
    id: 8,
    name: "Max",
    number: "16",
    stats: getDefaultStats(),
};
const playerNine = {
    id: 9,
    name: "Timmy",
    number: "1",
    stats: getDefaultStats(),
};
const playerTen = {
    id: 10,
    name: "Kevin",
    number: "00",
    stats: getDefaultStats(),
};


const randomStats = [];
const mockPlayers = [
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
    playerSix,
    playerSeven,
    playerEight,
    playerNine,
    playerTen
]

// playerId, statType, time
for (let i = 1; i < 11; i++) {
    for (let type of Object.values(StatType)) {
        const rand = Math.round(Math.random() * 6);
        for (let j = 0; j < rand; j++) {
            let newStat: StatLog = {
                playerId: i,
                playerName: '',
                statType: type,
                time: (Math.round(Math.random() * 300))
            }

            randomStats.push(newStat);
        }
    }
}


const playerMap: { [key: number]: Player } = {};

for (let player of mockPlayers) {
    playerMap[player.id] = player;
}

for (let stat of randomStats) {
    let curVal = playerMap[stat.playerId].stats[stat.statType] || 0;
    playerMap[stat.playerId].stats[stat.statType] = curVal + 1;
}

export { mockPlayers };