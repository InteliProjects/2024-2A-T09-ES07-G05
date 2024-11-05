import React, { createContext, useState } from 'react';

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
    const [allTags, setAllTags] = useState([]);

    return (
        <TagContext.Provider value={{ allTags, setAllTags }}>
            {children}
        </TagContext.Provider>
    );
};
