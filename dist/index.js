"use strict";
// Creation of required interfaces for users and administrators.
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
// Person const defining the users and who is the Administrator.
exports.persons = [
    {
        name: "Max Mustermann",
        nickname: "maxmust",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        nickname: "janedoe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        nickname: "katem",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        nickname: "brucew",
        age: 64,
        role: "World saver",
    },
];
// Function logPerson
function logPerson(persons) {
    let additionalInformation;
    if (persons.role) {
        additionalInformation = persons.role;
    }
    else {
        additionalInformation = persons.occupation;
    }
    console.log(`${persons.name}, ${persons.age}, ${additionalInformation} and ${persons.nickname} `);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
