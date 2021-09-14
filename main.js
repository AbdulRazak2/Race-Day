let raceNumber = Math.floor(Math.random()*1000);
//Did the entrant register before race day
let isRegisteredEarly = true;
//define racer's age for race time determination
let runnersAge = 18;

isRegisteredEarly ? (raceNumber) : (raceNumber += 1000);
// runners over 18 and did register early
if (runnersAge > 18 && isRegisteredEarly === true) {
  console.log('Your race starts at 9:30 AM. Your race number is ' + raceNumber + '.');
// runners over 18 or did register early
} else if (runnersAge > 18 || isRegisteredEarly === true) {
  console.log('Your race starts at 11:00 AM. Your race number is ' + raceNumber + '.');
// runners under 18 and did NOT register early
} else if (runnersAge < 18 && !isRegisteredEarly === true) {
  console.log('Your race starts at 12:30 PM. Your race number is ' + raceNumber + '.');
// all other options
} else {
  console.log('Please report to the registration desk.')
}

