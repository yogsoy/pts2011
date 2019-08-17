const fs = require("fs"),
chalk = require("chalk");

let d = new Date();

module.exports = {
    log: function(type, emoji, text) {
        d = new Date();
        console.log(`${chalk.green(`[${timeNumbers(d.getHours())}:${timeNumbers(d.getMinutes())}:${timeNumbers(d.getSeconds())} - ${type}]`)} ${emoji} ${text}`)
    }
}

function timeNumbers(inp) {
    const numberIn = parseInt(inp);
    if (numberIn < 10) {
        return `0${numberIn}`;
    } else {
        return numberIn;
    }
}