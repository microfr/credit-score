export interface CreditScoreNode {
    agency?: string
    creditScore?: string | number
}

export interface CreditScoreConnection {
    id?: string
    belongsTo?: string
    scores: CreditScoreNode[]
}

export interface Viewer {
    id?: string
    firstName?: string
    lastName?: string
    creditScore: CreditScoreConnection
}