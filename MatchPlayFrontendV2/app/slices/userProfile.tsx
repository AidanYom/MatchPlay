import { createSlice } from "@reduxjs/toolkit";
import { useAuth, useUser } from "@realm/react";
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
      return {
        ...state,
        loading: true,
      };
    },
    getUserProfileSuccess: (state, { payload }) => {
      return {
        ...state,
        userProfile: payload,
        loading: false,
        hasErrors: false,
      };
    },
    getUserProfileFailure: (state) => {
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    },
    updateUserProfile: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateUserProfileSuccess: (state) => {
      return {
        ...state,
        loading: false,
        hasErrors: false,
      };
    },
    updateUserProfileFailure: (state) => {
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    },
    updateUserProfileStage: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          stage:
            parseInt(state.userProfile.stage) > parseInt(payload)
              ? state.userProfile.stage
              : payload,
        },
      };
    },
    updateUserProfileName: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          name: payload,
        },
      };
    },
    updateUserProfilePhone: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          phoneNumber: payload,
        },
      };
    },
    updateUserProfileGender: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          gender: payload,
        },
      };
    },
    updateUserProfileBirthday: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          birthday: payload,
        },
      };
    },
    updateUserProfileHandicap: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          handicap: payload,
        },
      };
    },
    updateUserProfileCourseDescription: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          courseDescription: payload,
        },
      };
    },
    updateUserProfileSelfDescription: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          selfDescription: payload,
        },
      };
    },
    updateUserProfileTimePrefs: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          timePrefs: {
            ...state.userProfile.timePrefs,
            [payload]: !state.userProfile.timePrefs[payload],
          },
        },
      };
    },
    updateUserProfileMusicPrefs: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          musicPrefs: {
            ...state.userProfile.musicPrefs,
            [payload]: !state.userProfile.musicPrefs[payload],
          },
        },
      };
    },
    updateUserProfileDrinkingSmoking: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          drinkingSmoking: {
            ...state.userProfile.drinkingSmoking,
            [payload]: !state.userProfile.drinkingSmoking[payload],
          },
        },
      };
    },
    updateUserProfilePlayingRangeMin: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          playingRange: {
            ...state.userProfile.playingRange,
            lower: payload,
          },
        },
      };
    },
    updateUserProfilePlayingRangeMax: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          playingRange: {
            ...state.userProfile.playingRange,
            upper: payload,
          },
        },
      };
    },
    updateUserProfileImage: (state, { payload }) => {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          image: payload,
        },
      };
    },
    clearUserProfile: (state) => {
      return {
        ...state,
        userProfile: UserProfileInitialState,
      };
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
  updateUserProfileImage,
  clearUserProfile,
} = userProfileSlice.actions;

export const userProfileSelector = (state) => state.userProfile;

export default userProfileSlice.reducer;

export function fetchUserProfile(userId) {
  return async (dispatch) => {
    dispatch(getUserProfile());

    try {
      const url = base_url + `users/${userId}`;
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
      const url = base_url + `users/update`;
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
