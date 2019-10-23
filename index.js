/* global require */

const readline = require('readline')
const process = require('process')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Handles the input data from the terminal
 * @param  {string} input The input from the user
 */
function handleData(input) {
	var inputArray = input.split(" ")
	solveProblem(inputArray)
}

/**
 * Given an array of N, p, and q:
 * Print integers from 1 to N inclusive, separated by a single space
 * Prints 'WAT' instead if onlythe integer is divisible by p and the division does not contain the digit p
 * Prints 'SON' instead when only the same goes for q instead of p
 * Prints 'WATSON' instead when p and q rules are both true
 * 
 * @param  {Array} inputArray Three element array of N, p, and q
 */
var solveProblem = function (inputArray) {
	var N = inputArray[0]
	var p = inputArray[1]
	var q = inputArray[2]

	var rule_p;
	var rule_q;

	for (var i = 1; i <= N; i++) {
		rule_p = (i % p == 0) && ((i + '').indexOf(p.toString()) == -1)
		rule_q = (i % q == 0) && ((i + '').indexOf(q.toString()) == -1)

		if (rule_p && rule_q) {
			process.stdout.write('WATSON')
		} else {
			if (rule_p) {
				process.stdout.write('WAT')
			} else if (rule_q) {
				process.stdout.write('SON')
			} else {
				process.stdout.write(i.toString())
			}
		}

		if (i != N) {
			process.stdout.write(" ")
		}
	}
	process.stdout.write('\n')
}

rl.question('input: ', (input) => {
	handleData(input)
	rl.close()
});