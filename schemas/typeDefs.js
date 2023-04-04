const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth{
    token:String
    user: User  
}

type User{
    _id:ID
    fullName:String!
    username:String!
    email:String!
    address:String!
}



type Jewelry{
    _id:ID
    title:String
    description:String
    image:String
}




type Mutation{
    
}


  type Query{
    
}
`
module.exports=typeDefs
