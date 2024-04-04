import { createSlice } from "@reduxjs/toolkit";
import { useUser } from "@realm/react";
import { UserProfileState } from "../models/UserProfile";

const base_url = 

export const initialState = {
  userProfile: new UserProfileState(),
  loading: false,
  hasErrors: false,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getUserProfile: (state) => {
      state.loading = true;
    },
    getUserProfileSuccess: (state, { payload }) => {
      state.userProfile = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserProfileFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setUserBasicData: (state, { payload }) => {
      state.userProfile.basicData = payload;
    },
    setUserGolfData: (state, { payload }) => {
      state.userProfile.golfData = payload;
    },
    setUserTimePref: (state, { payload }) => {
      state.userProfile.timePref = payload;
    },
    setUserPartnerPref: (state, { payload }) => {
      state.userProfile.partnerPref = payload;
    },
    setUserId: (state, { payload }) => {
      state.userProfile.userId = payload;
    },
  },
});

export const {
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFailure,
  setUserBasicData,
  setUserGolfData,
  setUserTimePref,
  setUserPartnerPref,
  setUserId,
} = userProfileSlice.actions;

export const userProfileSelector = (state) => state.userProfile;

export default userProfileSlice.reducer;

export function fetchUserProfile() {
  user = useUser();
  return async (dispatch) => {
    dispatch(getUserProfile());

    try {
      //make the call to the api
      const response = await fetch();
      const data = await response.json();
      dispatch(getUserProfileSuccess(data));
    } catch (error) {
      dispatch(getUserProfileFailure());
    }
  };
}
