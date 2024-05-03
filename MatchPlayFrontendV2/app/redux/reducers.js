import {
  SET_USER_BASIC_DATA,
  SET_USER_GOLF_DATA,
  SET_USER_TIME_PREFERENCES,
  SET_USER_PARTNER_PREFERENCES,
} from "./actions";
import { userProfileState } from "../models/UserProfile";

import { createSlice } from "@reduxjs/toolkit";



const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userProfile: new userProfileState(),
        status: 'idle'
    },
    reducers: {
        
    }
})

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_BASIC_DATA:
      return {
        ...state,
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        gender: action.payload.gender,
        email: action.payload.email,
        birthday: action.payload.birthday,
      };
    case SET_USER_GOLF_DATA:
      return {
        ...state,
        handicap: action.payload.handicap,
        courseDescription: action.payload.courseDescription,
        selfDescription: action.payload.selfDescription,
      };
    case SET_USER_TIME_PREFERENCES:
      return {
        musicPrefs: action.payload.musicPrefs,
        timePrefs: action.payload.timePrefs,
      };
    case SET_USER_PARTNER_PREFERENCES:
      return {
        playingRange: action.payload.playingRange,
        drinkingSmoking: action.payload.drinkingSmoking,
      };

    default:
      return state;
  }
}


export default userReducer;