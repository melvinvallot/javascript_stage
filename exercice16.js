const birthDates = [
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "1990-01-15",
    email: "john.doe@foobar.com",
  },
  {
    firstName: "Ann",
    lastName: "Mary",
    birthDate: "1995-02-15",
    email: "mary.ann@foobar.com",
  },
  {
    firstName: "Daniella",
    lastName: "Biblio",
    birthDate: "1945-01-23",
    email: "dani.bib@foobar.com",
  },
];

const resultsFor2000 = {
  "2000-01-15": [
    {
      to: "john.doe@foobar.com",
      message: "Happy birthday, dear John!",
    },
    {
      to: "mary.ann@foobar.com",
      message: "Today is John Doe's birthday.",
    },
  ],
  "2000-02-15": [
    {
      to: "mary.ann@foobar.com",
      message: "Happy birthday, dear Ann!",
    },
    {
      to: "john.doe@foobar.com",
      message: "Today is Ann Mary's birthday.",
    },
  ],
};

//modifier l'année de la date
function replaceYearInDate(year, date) {
  return `${year}${date.slice(4, date.length)}`;
}

function parseBirthDatesForYear(birthDates, year) {
  return birthDates.reduce((accumulateur, value) => {
    const newYearDate = replaceYearInDate(year, value.birthDate);
    return {
      ...accumulateur,
      [newYearDate]: [
        createBirthdayMessage(value),
        ...birthDates
          .filter(
            ({ firstName, lastName }) =>
              firstName !== value.firstName && lastName !== value.lastName,
          )
          .map(({ email }) =>
            createBirthdayReminder(email, {
              firstNameForBdPerson: value.firstName,
              lastNameForBdPerson: value.lastName,
            }),
          ),
      ],
    };
  }, {});
}

function createBirthdayMessage(person) {
  return {
    to: person.email,
    message: `"Happy birthday, dear ${person.firstName}!"`,
  };
}

function createBirthdayReminder(
  recipientsEmail,
  { firstNameForBdPerson, lastNameForBdPerson },
) {
  return {
    to: recipientsEmail,
    message: `"Today is ${firstNameForBdPerson} ${lastNameForBdPerson}'s birthday."`,
  };
}

/*function newArrayObject(birthDates) {
  const newObject = {
    email: birthDates.email,
    message: birthDates.message,
  };
  return newObject;
}
console.log(newArrayObject);*/

//selection du destinataire selon l'année d'envoi du message
/*function selectDestBasedOnYear(date, email) {
  const enteredDate = new Date(date).getTime();
  const limitDate = new Date("2000-01-15").getTime();
  if (enteredDate <= limitDate) {
    console.log();
  } else if (enteredDate > limitDate) {
    return `to: "${email}"`;
  }
}*/
//creer un message selon le destinataire
//Today is Ann Mary's birthday.
//Happy birthday, dear Ann!

/*function createMessageForHappyBithday(firstName) {
  return `message: Happy birthday, dear ${firstName}`;
}

function createMessageForReminder(firstName, lastName) {
  return `message: Today is ${firstName} ${lastName}'s birthday.`;
}*/

/*let myGlobalResult = {};
function transformer(result2, result) {
  return birthDates.reduce((accumulateur, item) => {
    accumulateur[item.birthDate] = item;
    return accumulateur;
  }, {});
}

function transformation(formatPerson, formatPerson2) {
  const objectTransformation = {
    ..."1990-01-15",
    email: person.email,
    message,
  };
}

myGlobalResult = transformer(result2, result);*/

console.log(replaceYearInDate("2000", "1990-01-15"));
console.log(replaceYearInDate("2000", "1995-02-15"));
//console.log(keyDate["1990-01-15"]);
/*console.log(newArrayObject)
console.log(selectDestBasedOnYear("2000-02-15", "john.doe@foobar.com"));
console.log(createMessageForReminder("Ann", "Marry"));
console.log(createMessageForHappyBithday("John", "Doe"));*/
//console.log(myGlobalResult);

//creer mon tableau avec mes objets ou il y aura mon destinataire et mon message

//function getBirthDateMessages(birthDates, year) {}

console.log(parseBirthDatesForYear(birthDates, "2000"));
