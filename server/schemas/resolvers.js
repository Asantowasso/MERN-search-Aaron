const {Book, User} = require ('.../models');
const { User } = require('../models');

const resolvers = {
  Query: {

  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const User = await User.create({username, email, password});
      const token = signToken(User);

      return{token, User};
    },
    login: async(parent, {username, password}) => {
      const User = await User.findOne({
        username
      });

      if (!User){
        throw new AuthenticationError('No User with this login found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }

      const token = signToken(profile);
      return {token, profile};

    }

  }
  

}

module.exports = resolvers;