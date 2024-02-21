//prettier-ignore
function compatibility_score(user1, user2) {
    compatibility = 0;
  
    if (user1.timePrefs.weekdayDaytime && user2.timePrefs.weekdayDaytime) {compatibility += 1;}
    if (user1.timePrefs.weekdayTwilight && user2.timePrefs.weekdayTwilight) {compatibility += 1;}
    if (user1.timePrefs.weekendDaytime && user2.timePrefs.weekendDaytime) {compatibility += 1;}
    if (user1.timePrefs.weekendTwilight && user2.timePrefs.weekendTwilight) {compatibility += 1;}
  
    if (user1.drinkingSmoking.drinks && user2.drinkingSmoking.drinks) {compatibility += 2;}
    if (user1.drinkingSmoking.drinks && user2.drinkingSmoking.smokes) {compatibility += 0;}
    if (user1.drinkingSmoking.drinks && user2.drinkingSmoking.neither) {compatibility += 1;}
    if (user1.drinkingSmoking.drinks && user2.drinkingSmoking.noDrinkers) {compatibility -= 100;}
    if (user1.drinkingSmoking.drinks && user2.drinkingSmoking.noSmokers) {compatibility += 0;}
  
    if (user1.drinkingSmoking.smokes && user2.drinkingSmoking.drinks) {compatibility += 0;}
    if (user1.drinkingSmoking.smokes && user2.drinkingSmoking.smokes) {compatibility += 2;}
    if (user1.drinkingSmoking.smokes && user2.drinkingSmoking.neither) {compatibility += 1;}
    if (user1.drinkingSmoking.smokes && user2.drinkingSmoking.noDrinkers) {compatibility += 0;}
    if (user1.drinkingSmoking.smokes && user2.drinkingSmoking.noSmokers) {compatibility -= 100;}
  
    if (user1.drinkingSmoking.neither && user2.drinkingSmoking.drinks) {compatibility += 1;}
    if (user1.drinkingSmoking.neither && user2.drinkingSmoking.smokes) {compatibility += 1;}
    if (user1.drinkingSmoking.neither && user2.drinkingSmoking.neither) {compatibility += 1;}
    if (user1.drinkingSmoking.neither && user2.drinkingSmoking.noDrinkers) {compatibility += 1;}
    if (user1.drinkingSmoking.neither && user2.drinkingSmoking.noSmokers) {compatibility += 1;}
  
    if (user1.drinkingSmoking.noDrinkers && user2.drinkingSmoking.drinks) {compatibility -= 100;}
    if (user1.drinkingSmoking.noDrinkers && user2.drinkingSmoking.smokes) {compatibility += 0;}
    if (user1.drinkingSmoking.noDrinkers && user2.drinkingSmoking.neither) {compatibility += 1;}
    if (user1.drinkingSmoking.noDrinkers && user2.drinkingSmoking.noDrinkers) {compatibility += 1;}
    if (user1.drinkingSmoking.noDrinkers && user2.drinkingSmoking.noSmokers) {compatibility += 0;}
  
    if (user1.drinkingSmoking.noSmokers && user2.drinkingSmoking.drinks) {compatibility += 0;}
    if (user1.drinkingSmoking.noSmokers && user2.drinkingSmoking.smokes) {compatibility -= 100;}
    if (user1.drinkingSmoking.noSmokers && user2.drinkingSmoking.neither) {compatibility += 1;}
    if (user1.drinkingSmoking.noSmokers && user2.drinkingSmoking.noDrinkers) {compatibility += 0;}
    if (user1.drinkingSmoking.noSmokers && user2.drinkingSmoking.noSmokers) {compatibility += 1;}
  
    if (user1.musicPrefs.must && user2.musicPrefs.must) {compatibility += 2;}
    if (user1.musicPrefs.must && user2.musicPrefs.indifferent) {compatibility += 1;}
    if (user1.musicPrefs.must && user2.musicPrefs.none) {compatibility -= 1;}
  
    if (user1.musicPrefs.indifferent && user2.musicPrefs.must) {compatibility += 1;}
    if (user1.musicPrefs.indifferent && user2.musicPrefs.indifferent) {compatibility += 0;}
    if (user1.musicPrefs.indifferent && user2.musicPrefs.none) {compatibility += 1;}
  
    if (user1.musicPrefs.none && user2.musicPrefs.must) {compatibility -= 1;}
    if (user1.musicPrefs.none && user2.musicPrefs.indifferent) {compatibility += 1;}
    if (user1.musicPrefs.none && user2.musicPrefs.none) {compatibility += 2;}
  
    if (out_of_range(user1.handicap, user2.playingRange[0], user2.playingRange[1])) {compatibility -= 100}
    if (out_of_range(user2.handicap, user1.playingRange[0], user1.playingRange[1])) {compatibility -= 100}
  
    return compatibility;
  }
