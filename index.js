function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet <= 2000) {
    return "That will be $2.";
  } else if (feet <= 2500) {
    return "That will be $25.";
  } else {
    return "Sorry, we can’t accommodate you.";
  }
}



function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
