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
            case "changeActivity":
                return {
                    ...state,
                    activity: action.activity
                };
            case "changeName":
                return {
                    ...state,
                    name: action.newName
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
