const {gql} = require('apollo-server')

module.exports = gql`
    type CreditScoreNode {
        agency: String!
        creditScore: String!
    }

    type CreditScoreConnection {
        id: ID!,
        belongsTo: ID!,
        scores: [CreditScoreNode]
    }

    type Asset {
        src: String!
    }

    type Query {
        creditScore(id: ID!): CreditScoreConnection
        asset(namespace: String!): Asset
    }
`