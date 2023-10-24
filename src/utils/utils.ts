import { StatType } from "../types/enums"
import { Stat } from "../types/types";

const getDefaultStatline = (): Stat => {
    let defaultStat: Stat = {} as Stat;
    for (let key in StatType) {
        defaultStat[StatType[key as keyof typeof StatType]] = 0;
    }
    return defaultStat;
}

export { getDefaultStatline }