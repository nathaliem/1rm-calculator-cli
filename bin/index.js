#!/usr/bin/env node
const { getOneRepMax } = require('@nathaliem/one-rep-max');

const yargsInteractive = require('yargs-interactive');
const chalk = require('chalk');
const boxen = require('boxen');
const options = {
  interactive: { default: true },
  weight: { type: 'input', describe: 'Enter the weight of the lift (in kg)' },
  reps: { type: 'input', describe: 'Enter the amount of reps' },
};
const theme = {
    green: '#50C878',
    red: '#E0115F',
};

console.log(boxen('ONE REP MAX CALCULATOR', { borderColor: theme.red, borderStyle: 'classic', padding: 2, margin: 1, color: 'white' }));

console.log(chalk.hex(theme.green)(
    `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⠿⡏⢿⡟⠿⠁⢸⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣁⣀⡀⢠⣶⠶⠀⠁⣽⣿⣆⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠘⣿⣿⣷⡀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣆⠀⠀⠀⠀
    ⠀⠀⢀⣠⣴⣶⣶⣶⣦⣄⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⣼⣿⣿⣿⣿⣧⠀⠀⠀
    ⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣐⢾⣿⣿⣿⣿⣷⣦⣌⡻⣿⣿⣿⣿⣿⣧⠀⠀
    ⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⡇⠀
    ⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡉⠛⠿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⡇⠀
    ⠀⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⣿⣿⣷⡦⠀⣈⣉⣀⣤⣶⣿⣟⣛⠛⠛⠛⠛⠃⠀
    ⠀⣿⣿⣿⣿⣿⣿⣿⡿⠀⠾⠛⠋⠁⠐⠺⠿⠿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⣿⣿⣿⣿⣿⣿⠟⢁⣴⣶⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⣿⣿⣿⣿⠿⠋⣰⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠛⠛⠋⠁⠐⠛⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`));

console.log(chalk.hex(theme.green)(`
-------------------------------------------------------------------------------------------
`));
console.log(`Calculate the ${chalk.hex(theme.red).bold('max weight you can lift')} for a single repetition of an exercise.`);
console.log(chalk.hex(theme.green)(`
-------------------------------------------------------------------------------------------
`));

yargsInteractive()
  .usage('$0 <command>')
  .interactive(options)
  .then(result => {
    let { weight, reps } = result;

    weight = weight.toString().replace(/,/g, '.').replace(/[^0-9\.]+/g, '');
    reps = reps.toString().replace(/,/g, '.');

    const max = getOneRepMax(weight, reps, 2, 'oconner');
    const styledMax = chalk.hex(theme.green).bold(`${max} kg`);

    console.log(boxen(`Your one rep max is estimated to be ${styledMax}`, { padding: 1, borderStyle: 'double', borderColor: theme.red }));
  });