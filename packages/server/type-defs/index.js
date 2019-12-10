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

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        creditScore: CreditScoreConnection
    }

    type Asset {
        src: String!
    }

    type Query {
        viewer: User
        asset(namespace: String!): Asset
    }
`