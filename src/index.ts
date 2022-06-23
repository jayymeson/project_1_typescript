// Creation of required interfaces for users and administrators.

interface Users {
  name: string;
  nickname: string;
  age: number;
  occupation: string;
  role?: string;
}

interface Admin {
  name: string;
  nickname: string;
  age: number;
  role: string;
  occupation?: string;
}

// Kind of what the Person const should look like
export type Person = Users | Admin;

// Person const defining the users and who is the Administrator.
export const persons: Person[] = [
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

export function logPerson(persons: Person) {
  let additionalInformation: string | undefined;
  if (persons.role) {
    additionalInformation = persons.role;
  } else {
    additionalInformation = persons.occupation;
  }
  console.log(
    `${persons.name}, ${persons.age}, ${additionalInformation} and the nickname ${persons.nickname} `
  );
}

persons.forEach(logPerson);
