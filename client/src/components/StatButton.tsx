import { Button } from "@mui/material";
import { StatType } from "../types/enums";
import { StatMetadata } from "../types/types";

interface StatButtonProps {
    statMetadata: StatMetadata;
    onStatSelected: (stat: StatType) => void;
};

const StatButton = ({ statMetadata, onStatSelected }: StatButtonProps) => {

    return (
        <Button
            className={statMetadata.className}
            variant={statMetadata.variant}
            color={statMetadata.color ? statMetadata.color : "primary"}
            onClick={() => onStatSelected(statMetadata.statType)}>
            {statMetadata.displayableString}
        </Button>)
}

export default StatButton;