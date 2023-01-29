import { gql } from "@apollo/client";

export const GET_ME = gql`

query getMe {
  me {
    username
    email
    bookCount
    savedBooks {
      _id
      authors
      title
      image
      link

    }
  }

}



`;
