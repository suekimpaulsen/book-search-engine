const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id:
    username:
    email:
    bookCount:
    savedBooks: [Book]
  }

  type Book {
    bookId: 
    authors: [String]
    description:
    title: 
    image: 
    link: 
  }

  type Auth {
    token: 
    user: 
  }

  type Query {
    me: User
  }

  type Mutation {
    login:
    addUser:
    saveBook:
    removeBook:
  }
`;

module.exports = typeDefs;