const yargs = require("yargs");
const chalk = require("chalk");
const showBanner = require('node-banner');
const figlet = require('figlet');
const CLI = require('clui'),
    Spinner = CLI.Spinner;
 

    var countdown = new Spinner('The program will run in 3 seconds ... ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
 
countdown.start();
 
var number = 3;
setInterval(function () {
  number--;
  countdown.message('The program will run in ' + number + ' seconds... ');
  if (number === 0) {
    process.stdout.write('\n');
    process.exit(0);
  }
}, 1000);

figlet('GHOSTEPROG', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log("   Please Type ( node main.js --help )")
});

const { addContact, listContacts, removeContact } = require("./contacts");


yargs.scriptName(`${chalk.yellow("Contact Manager")}`);
yargs.usage(`$0 ${chalk.red("<Command>")} ${chalk.green("[Args]")}`);

yargs.version("1.1.0");

yargs.command({
    command: "create",
    aliases: ["c"],
    describe: `${chalk.green("[create new contact]")}`,
    builder: {
        fullname: {
            alias: "f",
            describe: "Person fullname",
            demandOption: true,
            type: "string",
        },
        phone: {
            alias: "p",
            describe: "Person Phone Number",
            demandOption: true,
            type: "number",
        },
        email: {
            alias: "e",
            describe: "Person Email Address",
            demandOption: true,
            type: "string",
        },
    },
    handler({ fullname, phone, email }) {
        addContact(fullname, phone, email);
    },
});

yargs.command({
    command: "list",
    aliases: ["l"],
    describe: `${chalk.red("[listing the saved contacts]")}`,
    handler() {
        listContacts();
    },
});

yargs.command({
    command: "remove",
    aliases: ["r"],
    describe: `${chalk.red("[remove contact]")}`,
    builder: {
        fullname: {
            alias: "f",
            describe: "Person fullname",
            demandOption: true,
            type: "string",
        },
    },
    handler({ fullname }) {
        removeContact(fullname);
    },
});

yargs.parse();
