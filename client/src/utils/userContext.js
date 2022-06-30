import React from "react";

export const firstContext = React.createContext({firstName: '', setFirstName: () => {}})
export const lastContext = React.createContext({lastName: '', setLastName: () => {}})
