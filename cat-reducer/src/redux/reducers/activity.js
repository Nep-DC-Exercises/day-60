import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "../actionTypes";

const initialState = {
    activity: "not napping"
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NAP: {
            return {
                ...state,
                activity: "napping"
            };
        }
        case ACTION_EAT: {
            return {
                ...state,
                activity: "eating"
            };
        }
        case ACTION_PLAY: {
            return {
                ...state,
                activity: "playing"
            };
        }
        default: {
            return state;
        }
    }
};

export default activityReducer;
