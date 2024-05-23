interface ICriterion {
    current: number,
    increase: number,
    percent: number,
}

export interface IStatistics {
    purchasesCount: ICriterion;
    bank: ICriterion;
    profit: ICriterion;
    bill: ICriterion;
}
