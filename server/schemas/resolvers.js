const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return awaitUser.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("We cannot find that user");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const User = await User.create({ username, email, password });
      const token = signToken(User);

      return { token, User };
    },
    loginUser: async (parent, { username, password }) => {
      const User = await User.findOne({
        username,
      });

      if (!User) {
        throw new AuthenticationError("No User with this login found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    saveBook: async (parent, { bookInfo }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: bookInfo },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { savedBooks: bookId },
          },
          { new: true,
            runValidators: true,
          }
        );
      }
      
    },
  },
};

module.exports = resolvers;
