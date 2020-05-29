function wakeDog(dogName, dogBreed) {
    console.log(`wake ${dogName} the ${dogBreed}`);
  }
  
  function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
  }
  
  function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  }
  function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
  function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
  }
  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
  }

const routine = [
    leashDog,
    walkToPark,
     throwFrisbee ,
     walkHome,
     unleashDog

];



function exerciseDog(dogName, dogBreed) {
  let arrayOfRoutine = routine.map((dogRoutineFunc) => {
    return dogRoutineFunc(dogName, dogBreed);
  });
  return arrayOfRoutine;
}

// const arrayOfRoutine = exerciseDog("Bob", "poodle");
// console.log(arrayOfRoutine);
