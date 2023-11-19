import { createContext, useContext } from 'react';

const YtPlayerContext = createContext<React.RefObject<any> | null>(null);

const useYtPlayer = () => useContext(YtPlayerContext);

export { YtPlayerContext, useYtPlayer }