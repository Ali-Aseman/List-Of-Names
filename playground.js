const fs = require("fs");

const persons = [
    { id: 1, fullname: "younes ghorbany" },
    { id: 2, fullname: "Iman Madaeny" },
    { id: 3, fullname: "Sajad Bagherzade" },
];

// fs.writeFileSync("contacts.json", JSON.stringify(persons));

//Variables Bindings
const data = fs.readFileSync("contacts.json");
const p = JSON.parse(data.toString());
console.log(p);
console.log(typeof p);

//-----------------------------------------------------
// console.log(process.argv[2]);

const command = process.argv[2];

// if (command == "add") {
//     console.log("Adding...");
// } else {
//     console.log("Command not valid.");
// }

switch (command) {
    case "add":
        console.log("Adding...");
        break;
    case "remove":
        console.log("Removing..");
        break;
    default:
        console.log("Command not valid.");
}

//----------------------------
console.log(process.argv);
