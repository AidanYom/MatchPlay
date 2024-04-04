export class UserProfileState {
  userId: Text;
  basicData: UserBasicData;
  golfData: UserGolfData;
  timePref: UserTimePref;
  partnerPref: UserPartnerPref;
}

export class UserBasicData {
  name: String;
  phoneNumber: String;
  gender: String;
  email: String;
  birthday: String;
}

export class UserGolfData {
  handicap: Number;
  courseDescription: String;
  selfDescription: String;
}

export class UserTimePref {
  musicPrefs: {
    definitely: Boolean;
    indifferent: Boolean;
    noMusic: Boolean;
  };
  timePrefs: {
    weekendDaytime: Boolean;
    weekendTwilight: Boolean;
    weekdayDaytime: Boolean;
    weekdayTwilight: Boolean;
  };
}

export class UserPartnerPref {
  playingRange: {
    lower: Number;
    upper: Number;
  };
  drinkingSmoking: {
    drinks: Boolean;
    smokes: Boolean;
    neither: Boolean;
    noSmokers: Boolean;
    noDrinkers: Boolean;
  };
}
