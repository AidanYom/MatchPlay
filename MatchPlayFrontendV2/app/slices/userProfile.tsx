import { createSlice } from "@reduxjs/toolkit";
import { useUser } from "@realm/react";
import { UserProfileInitialState } from "../models/UserProfile";
import Config from "react-native-config";

const base_url = "http://192.168.4.145:3000/";

export const initialState = {
  userProfile: UserProfileInitialState,
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
    updateUserProfile: (state) => {
      state.loading = true;
    },
    updateUserProfileSuccess: (state) => {
      state.loading = false;
      state.hasErrors = false;
    },
    updateUserProfileFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    updateUserProfileStage: (state, { payload }) => {
      state.userProfile.stage =
        parseInt(state.userProfile.stage) > parseInt(payload)
          ? state.userProfile.stage
          : payload;
    },
    updateUserProfileName: (state, { payload }) => {
      state.userProfile.name = payload;
    },
    updateUserProfilePhone: (state, { payload }) => {
      state.userProfile.phoneNumber = payload;
    },
    updateUserProfileGender: (state, { payload }) => {
      state.userProfile.gender = payload;
    },
    updateUserProfileBirthday: (state, { payload }) => {
      state.userProfile.birthday = payload;
    },
    updateUserProfileHandicap: (state, { payload }) => {
      state.userProfile.handicap = payload;
    },
    updateUserProfileCourseDescription: (state, { payload }) => {
      state.userProfile.courseDescription = payload;
    },
    updateUserProfileSelfDescription: (state, { payload }) => {
      state.userProfile.selfDescription = payload;
    },
    updateUserProfileTimePrefs: (state, { payload }) => {
      state.userProfile.timePrefs[payload] =
        !state.userProfile.timePrefs[payload];
    },
    updateUserProfileMusicPrefs: (state, { payload }) => {
      state.userProfile.musicPrefs[payload] =
        !state.userProfile.musicPrefs[payload];
    },
    updateUserProfileDrinkingSmoking: (state, { payload }) => {
      state.userProfile.drinkingSmoking[payload] =
        !state.userProfile.drinkingSmoking[payload];
    },
    updateUserProfilePlayingRangeMin: (state, { payload }) => {
      state.userProfile.playingRange.lower = payload;
    },
    updateUserProfilePlayingRangeMax: (state, { payload }) => {
      state.userProfile.playingRange.upper = payload;
    },
    clearUserProfile: (state) => {
      state.userProfile = UserProfileInitialState;
    },
  },
});

export const {
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFailure,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFailure,
  updateUserProfileStage,
  updateUserProfileName,
  updateUserProfilePhone,
  updateUserProfileGender,
  updateUserProfileBirthday,
  updateUserProfileHandicap,
  updateUserProfileCourseDescription,
  updateUserProfileSelfDescription,
  updateUserProfileTimePrefs,
  updateUserProfileMusicPrefs,
  updateUserProfileDrinkingSmoking,
  updateUserProfilePlayingRangeMin,
  updateUserProfilePlayingRangeMax,
  clearUserProfile,
} = userProfileSlice.actions;

export const userProfileSelector = (state) => state.userProfile;

export default userProfileSlice.reducer;

export function fetchUserProfile(userId) {
  return async (dispatch) => {
    dispatch(getUserProfile());

    try {
      const url = Config.API_URL + `users/${userId}`;
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(getUserProfileSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getUserProfileFailure());
    }
  };
}

export function putUpdateUserProfile(userProfile) {
  return async (dispatch) => {
    dispatch(updateUserProfile());

    try {
      const url = Config.API_URL + `users/update`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
      };
      const response = await fetch(url, options);
      dispatch(updateUserProfileSuccess());
    } catch (error) {
      console.log(`error: ${error}`);
      dispatch(updateUserProfileFailure());
    }
  };
}
