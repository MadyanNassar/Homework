'use strict';
/*------------------------------------------------------------------------------
- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollBack()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/
// TODO Remove callback and return a promise
function rollDice() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);

      if (roll > 6) {
        // TODO replace "error" callback
        reject(new Error('Oops... Dice rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        // TODO replace "success" callback
        resolve(value);
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
    // Start the initial roll
    rollOnce(1);
  });
}

// TODO Refactor to use promise
rollDice()
  .then((response) => console.log(`Success! Dice settled on ${response}`))
  .catch((error) => console.log(error.message));

// ! Do not change or remove the code below
module.exports = rollDice;

/*
I noticed that when using promise if one error happened then it will not returns success at all;
 but with callback it will returns success always for at least 1 success even if there're many errors.
so it looks likes promise (AND gate &&) while callback is (OR gate ||)
*/
