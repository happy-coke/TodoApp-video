import {useState} from 'react';
import { Web3PModal } from "web3modal";
import { ethers, Signer } from "ethers";

// INTERNSL IMPORT
import {TodolistAddress, TodolistABI, toDoListAddress, toDoListABI} from "./constants";

const fetchContract = (signerOrProvider) => new ethers.constants(toDoListAddress, toDoListABI, signerOrProvider);

export const TodolistContext = React.createConxt();

export const ToDoListProvider = ({children}) => {

    return(
        <TodolistContext.Provider value={{}}>
            {children}
        </TodolistContext.Provider>
    );
}

const TodolistApp = () => {
  return (
    <div>TodolistApp</div>
  )
}

export default TodolistApp