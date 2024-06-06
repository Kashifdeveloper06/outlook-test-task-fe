import { createContext, useState } from 'react';

export const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
    const [account, setAccount] = useState({ username: '', name: '', email: '' });

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider