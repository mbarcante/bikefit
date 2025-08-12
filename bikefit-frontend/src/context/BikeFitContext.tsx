import React, { createContext, useContext, useState } from 'react';
import { IBikeFit } from '../types';

interface IBikeFitContextType {
    bikefit: IBikeFit | null;
    setBikefit: React.Dispatch<React.SetStateAction<IBikeFit | null>>;
}

const BikeFitContext = createContext<IBikeFitContextType | null>(null);

export const BikeFitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bikefit, setBikefit] = useState<IBikeFit | null>(null);

    const value = {
        bikefit,
        setBikefit,
    };

    return <BikeFitContext.Provider value={value}>{children}</BikeFitContext.Provider>;
};

export const useBikeFits = () => {
    const context = useContext(BikeFitContext);
    if (!context) {
        throw new Error('useBikeFits deve ser usado dentro de um BikeFitProvider');
    }
    return context;
};