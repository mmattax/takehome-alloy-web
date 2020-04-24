import { SlackTeam, SlackChannel } from "./models/slack";

// Action Types
export const SET_TEAM = 'SET_TEAM';
export const SET_CHANNEL = 'SET_CHANNEL';

// Action Creators
export function setTeam(team: SlackTeam) {
 return {
     type: SET_TEAM,
     team
 }
}

export function setChannel(channel: SlackChannel) {
    return {
        type: SET_CHANNEL,
        channel
    }
}