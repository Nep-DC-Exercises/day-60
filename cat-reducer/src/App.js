import React, { useReducer } from "react";
import "./App.css";
import Activity from "./components/activity";
import { StateProvider } from "./context";

const App = () => {
    const initialState = {
        name: "Guster",
        activity: "purring"
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "changeCat":
                return {
                    ...state,
                    name: action.newName,
                    activity: action.newActivity
                };
            default:
                return state;
        }
    };
    
    return (
        <div className="App">
            <StateProvider value={useReducer(reducer, initialState)}>
                <Activity />
            </StateProvider>
        </div>
    );
};

export default App;
