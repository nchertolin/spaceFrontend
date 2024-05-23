import { ReactNode } from 'react';

export interface IStatisticsCard {
    readonly title: string,
    readonly current: number,
    readonly increase: number,
    readonly percent: number,
    readonly icon: ReactNode,
}
