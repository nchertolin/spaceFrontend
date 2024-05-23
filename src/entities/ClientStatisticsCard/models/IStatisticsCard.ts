import { ReactNode } from 'react';

export interface IClientStatisticsCard {
    readonly title: string,
    readonly value: number,
    readonly icon: ReactNode,
}
