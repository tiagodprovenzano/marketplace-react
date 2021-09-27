import { gql } from "@apollo/client";

export const ADD_STORE = gql`
  mutation AddStore ($store: AddStore!){
    addStore(store: $store) {
      id
      name
    }
  }
`