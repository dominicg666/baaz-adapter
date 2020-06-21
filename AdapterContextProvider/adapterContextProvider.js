import React from 'react';

import AppContextProvider from '../context/app';
import ErrorContextProvider from '../context/unhandledErrors';

/**
 *
 * @property {React.Component[]} contextProviders
 */
const contextProviders = [
    ErrorContextProvider,
    AppContextProvider,
];

const AdapterContextProvider = ({ children }) => {
    return contextProviders.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>;
    }, children);
};

export default AdapterContextProvider;
