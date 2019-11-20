import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "./actionTypes";

export const catNap = () => ({
    type: ACTION_NAP
});

export const catEat = () => ({
    type: ACTION_EAT
});

export const catPlay = () => ({
    type: ACTION_PLAY
});
