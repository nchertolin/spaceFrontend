import { ILastPurchase, IPurchase } from '@/entities/Purchase/model/IPurchase.ts';

export interface IClient {
    readonly id: number;
    readonly name: string;
    readonly phone: string;
    readonly bonuses: number;
    readonly description: string;
    readonly lastPurchase?: ILastPurchase;
    readonly purchases?: IPurchase[];
}

export interface ClientDto {
    readonly id: number;
    readonly name: string;
    readonly phone: string;
    readonly bonuses: number;
    readonly description: string;
    readonly purchases?: IPurchase[];
}
