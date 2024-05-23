export interface IPurchase {
    readonly id: number;
    readonly date: string;
    readonly name: string;
    readonly reward: number;
    readonly description: string;
    readonly client?: {
        id: number;
        name: string;
        phone: string;
    };
}

export interface ILastPurchase {
    readonly date: string;
    readonly name: string;
    readonly reward: number;
}
