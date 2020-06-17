/*
The program is to register runners based on age and the time registered for the event.
If user is >18 and registered early then user can start running at 9:30 am.
*/

let raceNumber = Math.floor(Math.random() * 1000);


const lateAdults = '11:00 am'
const registeredEarly = false;
const age = 25

if (age >= 18 ){
  raceNumber += 1000
}

if (age >= 18 && registeredEarly == true){
  console.log(`Your race will start at 9:30 am and your race number is ${raceNumber}.` )
}

else (age >= 18 && registeredEarly == false)
console.log(`Your race will start at 11:00 am and your race number is ${raceNumber}.`)




if ( age < 18  && age > 12)
  console.log(`Your race will start at 12:30 am and your race number is ${raceNumber}.`)
