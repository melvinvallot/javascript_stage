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
function replaceYearInDate(year, date) {
  return `${year}${date.slice(4, date.length)}`;
}

function parseBirthDatesForYear(birthDates, year) {
  return birthDates.reduce((accumulateur, value) => {
    const newYearDate = replaceYearInDate(year, value.birthDate);
    return {
      ...accumulateur,
      [newYearDate]: createBirthdayMessage(value),
      ...birthDates
        .filter((firstName, lastName) => {
          firstName !== value.firstName && lastName !== value.lastName;
        })
        .map((email) => {
          createBirthdayReminder(email, {
            firstName: value.firstName,
            lastName: value.lastName,
          });
        }),
    };
  }, {});
}
function createBirthdayMessage(person) {
  return {
    to: person.email,
    message: `"Happy birthday, dear ${person.firstName}!"`,
  };
}

function createBirthdayReminder(recipient, firstName, lastName) {}
console.log(replaceYearInDate("2000", "1990-01-15"));
console.log(replaceYearInDate("2000", "1995-02-15"));
console.log(parseBirthDatesForYear(birthDates, "2000"));






function replaceYearInDate(year ,date) {
  return `${year}${date.slice(4, date.length)}`
}

