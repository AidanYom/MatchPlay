export const SET_USER_BASIC_DATA = "SET_USER_BASIC_DATA";
export const SET_USER_GOLF_DATA = "SET_USER_GOLF_DATA";
export const SET_USER_TIME_PREFERENCES = "SET_USER_TIME_PREFERENCES";
export const SET_USER_PARTNER_PREFERENCES = "SET_USER_PARTNER_PREFERENCES";

export const setBasicData =
  (name, phoneNumber, gender, email, birthday) => (dispatch) => {
    dispatch({
      type: SET_USER_BASIC_DATA,
      payload: {
        name: name,
        phoneNumber: phoneNumber,
        gender: gender,
        email: email,
        birthday: birthday,
      },
    });
  };

export const setGolfData =
  (handicap, courseDescription, selfDescription) => (dispatch) => {
    dispatch({
      type: SET_USER_GOLF_DATA,
      payload: {
        handicap: handicap,
        courseDescription: courseDescription,
        selfDescription: selfDescription,
      },
    });
  };

export const setTimePref = (musicPrefs, timePrefs) => (dispatch) => {
  dispatch({
    type: SET_USER_TIME_PREFERENCES,
    payload: {
      musicPrefs: musicPrefs,
      timePrefs: timePrefs,
    },
  });
};

export const setPartnerPref = (playingRange, drinkingSmoking) => (dispatch) => {
  dispatch({
    type: SET_USER_PARTNER_PREFERENCES,
    payload: {
      playingRange: playingRange,
      drinkingSmoking: drinkingSmoking,
    },
  });
};
