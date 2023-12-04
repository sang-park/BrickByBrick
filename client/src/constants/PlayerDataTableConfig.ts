import { GridColDef } from '@mui/x-data-grid';

const playerStatHeaders: GridColDef[] = [
    { field: 'number', headerName: 'Number', width: 80 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'pts', headerName: 'PTS', width: 80 },
    { field: 'fgm', headerName: 'FGM', width: 80 },
    { field: 'fga', headerName: 'FGA', width: 80 },
    { field: '3ptm', headerName: '3PTM', width: 80 },
    { field: '3pta', headerName: '3PTA', width: 80 },
    { field: 'ftm', headerName: 'FTM', width: 80 },
    { field: 'fta', headerName: 'FTA', width: 80 },
    { field: 'oReb', headerName: 'OREB', width: 80 },
    { field: 'dReb', headerName: 'DREB', width: 80 },
    { field: 'tReb', headerName: 'REB', width: 80 },
    { field: 'ast', headerName: 'AST', width: 80 },
    { field: 'stl', headerName: 'STL', width: 80 },
    { field: 'blk', headerName: 'BLK', width: 80 },
    { field: 'to', headerName: 'TO', width: 80 },
];

export { playerStatHeaders };