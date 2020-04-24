import { SET_TEAM, SET_CHANNEL } from "../actions";

export const initialState:any = {
    team: null,
    channel: null,
}

export function appReducer(previousState=initialState, action: any) {
    const state = Object.assign({}, previousState)
    if (action.type === SET_TEAM) {
        state.team = action.team;
    } else if (action.type === SET_CHANNEL) {
        state.channel = action.channel;
    }
    return state;
}