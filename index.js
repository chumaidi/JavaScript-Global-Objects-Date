  var moment = require('moment');
moment().format();  
  const yearBorn = moment().format("1990");
  const yearNow = moment().year ();

  setTimeout(() => {
console.log(yearNow - yearBorn);
  },2000);
  