/*
Application is for random nummber game.
it generates random numbers for user.
If it is number 8 then user is a winner
else it gives prediction.
*/

let userName
userName ='Jane'
userName ? console.log(`Hello!, ${userName}`): console.log('Hello!')

let userQuestion

userQuestion ?
console.log(`The user asked: ${userQuestion}`):
console.log('No Questions asked.')

const randomNumber = Math.floor(Math.random() * 8)
console.log(`${randomNumber}`)

const eightBall=''


switch(randomNumber){
    case 0:
      console.log('It is certain')
      break;

    case 1:
      console.log('It is decidedly so')
      break;
    case 2:
      console.log('Reply hazy try again')
      break;

    case 3:
       console.log('Cannot predict now')
       break;
    case 4:
      console.log('Do not count on it')
       break;
    case 5:
       console.log('My sources say no')
       break;
    case 6:
       console.log('Outlook not so good')
       break;
    case 7:
       console.log('Signs point to yes')
       break;
    default:
      console.log(`The eight ball answered: ${eightBall}`);
}
