import { StatType } from "../types/enums";
import { StatMetadata } from "../types/types";

const twoPointsMade: StatMetadata = {
    statType: StatType.twoPointsMade,
    displayableString: "2 Pts Made",
    variant: "contained",
    color: "success",
    className: "two-pt-made",
};

const twoPointsMissed: StatMetadata = {
    statType: StatType.twoPointsMissed,
    displayableString: "2 Pts Missed",
    variant: "contained",
    color: "error",
    className: "two-pt-missed",
};

const threePointsMade: StatMetadata = {
    statType: StatType.threePointsMade,
    displayableString: "3 Pts Made",
    variant: "contained",
    color: "success",
    className: "three-pt-made",
};

const threePointsMissed: StatMetadata = {
    statType: StatType.threePointsMissed,
    displayableString: "3 Pts Missed",
    variant: "contained",
    color: "error",
    className: "three-pt-missed",
};

const freeThrowsMade: StatMetadata = {
    statType: StatType.freeThrowsMade,
    displayableString: "FT Made",
    variant: "contained",
    color: "success",
    className: "ft-made",
};

const freeThrowsMissed: StatMetadata = {
    statType: StatType.freeThrowsMissed,
    displayableString: "FT Missed",
    variant: "contained",
    color: "error",
    className: "ft-missed",
};

const assist: StatMetadata = {
    statType: StatType.assists,
    displayableString: "AST",
    variant: "outlined",
    className: "ast",
};

const defensiveRebound: StatMetadata = {
    statType: StatType.dRebounds,
    displayableString: "D-REB",
    variant: "outlined",
    className: "dreb",
};

const offensiveRebound: StatMetadata = {
    statType: StatType.oRebounds,
    displayableString: "O-REB",
    variant: "outlined",
    className: "oreb",
};

const turnover: StatMetadata = {
    statType: StatType.turnovers,
    displayableString: "TO",
    variant: "outlined",
    className: "to",
};
const steal: StatMetadata = {
    statType: StatType.twoPointsMade,
    displayableString: "STL",
    variant: "outlined",
    className: "stl",
};
const block: StatMetadata = {
    statType: StatType.twoPointsMade,
    displayableString: "BLK",
    variant: "outlined",
    className: "blk",
};

export default [
    twoPointsMade,
    twoPointsMissed,
    threePointsMade,
    threePointsMissed,
    assist,
    defensiveRebound,
    offensiveRebound,
    turnover,
    steal,
    block,
    freeThrowsMade,
    freeThrowsMissed,
]; 