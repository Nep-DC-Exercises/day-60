import React, { useReducer } from "react";
import "./App.css";
import Activity from "./components/activity";
import { StateProvider } from "./context";
import nextId from "react-id-generator";

const App = () => {
    const initialState = {
        cats: {
            1001: {
                name: "Beans",
                activity: "meowing"
            },
            1002: {
                name: "Bandit",
                activity: "playing"
            }
        }
    };

    const reducer = (state, action) => {
        let randomId = nextId();
        switch (action.type) {
            case "addCat":
                return {
                    ...state,
                    cats: {
                        ...state.cats,
                        [randomId]: {
                            name: action.newName,
                            activity: action.newActivity
                        }
                    }
                };
            case "updateCat":
              return {
                ...state,
                cats: {
                  ...state.cats,
                  [action.id]: {
                    name: action.newName,
                    activity: action.newActivity
                  }
                }
              }
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
