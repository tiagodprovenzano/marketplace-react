import React from "react";
import { IUser } from "../types/IUser";

class AuthContextClass {
    private user: IUser | undefined
    constructor(){}

    setUser(user: IUser){
        this.user = user
    }

    getUser(){
        return this.user
    }

}
export const initialValue = new AuthContextClass()
export const AuthContext = React.createContext(initialValue)