import React from 'react';

export const AppContext = React.createContext({
    languageId: 'en',
    onLanguageChange: () => {},
});

AppContext.displayName = 'AppContext';
