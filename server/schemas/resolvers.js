const {Book, User} = require ('.../models')

const resolvers = {
  Query :{
    Book : async () => {
      return Book.find({});
    }
  }

}