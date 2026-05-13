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

// Remplace l'année dans une date
function replaceYearInDate(year, date) {
  return `${year}${date.slice(4, date.length)}`;
}

// Génère les messages d'anniversaire pour une année donnée
function sendBirthdayMessage(year, birthday) {
    
}
// Crée la nouvelle date avec l'année fournie

// Message pour la personne qui fête son anniversaire

// Messages pour tous les autres

// Combine le message d'anniversaire avec les autres messages
