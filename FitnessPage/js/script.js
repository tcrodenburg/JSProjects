const bfButton = document.querySelector(".bfButton");
const goal = document.querySelector(".goal");
const calories = document.querySelector(".calories");
const tdee = document.querySelector(".tdee");

bfButton.addEventListener("click", () => {
  let height = document.getElementById("bfForm").elements[0].value;
  let weight = document.getElementById("bfForm").elements[1].value;
  let age = document.getElementById("bfForm").elements[2].value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let bmi = document.getElementById("bfForm").elements[5].value;
  let activityLevel = evaluateActivity(
    document.getElementById("bfForm").elements[6].value
  );
  let weightGoal = document.querySelector(
    'input[name="weightGoals"]:checked'
  ).value;
  let formula = document.querySelector(
    'input[name="whichFormula"]:checked'
  ).value;
  let result;

  // another possible formula - Mifflin?
  // men
  // 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5
  // w
  // 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161
  // m * 1, lw * .2, gw * 1.2

  if (formula == "standard") {
    let standardGoal = evaluateStandardGoal(weightGoal);
    result = standardFormula(standardGoal, weight);
  }
  if (formula == "harris-benedict") {
    let tdee = findTDEE(weight, height, age, gender, activityLevel);
    result = Math.round(hbFormula(tdee, weightGoal));
  }

  if (formula == "katch-mcardle") {
    result = Math.round(kmFormula(weight, bmi, weightGoal, activityLevel));
  }

  goal.textContent = weightGoal;
  calories.textContent = result;
});
// evaluate activity level
function evaluateActivity(activity) {
  switch (activity) {
    case "sedentary":
      return 1.2;
      break;
    case "lightlyActive":
      return 1.375;
      break;
    case "moderatelyActive":
      return 1.55;
      break;
    case "highlyActive":
      return 1.725;
      break;
    case "extremelyActive":
      return 1.9;
      break;
  }
}
// end of evaluate activity level
//
//
// standard formula calculations
function evaluateStandardGoal(weightGoal) {
  switch (weightGoal) {
    case "lose weight":
      return 12.5;
      break;
    case "maintain weight":
      return 15.5;
      break;
    case "gain weight":
      return 18.5;
      break;
  }
}

function standardFormula(standardGoal, weight) {
  return standardGoal * weight;
}
// end of standard formula calculations
//
//
//
// hb formula calculations
function findTDEE(weight, height, age, gender, activity) {
  if (gender == "male") {
    return Math.round(
      66 +
        (13.7 * (weight * 0.45359237) + (5 * (height * 2.54) - 6.8 * age)) *
          activity
    );
  } else {
    return Math.round(
      655 +
        (9.6 * (weight * 0.45359237) + (1.8 * (height * 2.54) - 4.7 * age)) *
          activity
    );
  }
}

function hbFormula(tdee, weightGoal) {
  let multiplyer = 0;

  if (weightGoal == "lose weight") {
    multiplyer = 0.8;
    return tdee * multiplyer;
  }
  if (weightGoal == "maintain weight") {
    multiplyer = 1;
    return tdee * multiplyer;
  }
  if (weightGoal == "gain weight") {
    multiplyer = 1.2;
    return tdee * multiplyer;
  }
}
// end of hb formula calculations
//
//
//
// km formula calculations
function kmFormula(weight, bmi, weightGoal, activityLevel) {
  bmi = bmi / 100;
  weightkg = weight * 0.45359237;
  let ffm = weightkg - bmi * weightkg;
  let tdee = 21.6 * ffm + 370;

  if (weightGoal == "lose weight") {
    return tdee * activityLevel;
  }
  if (weightGoal == "maintain weight") {
    return tdee * activityLevel;
  }
  if (weightGoal == "gain weight") {
    return tdee * activityLevel;
  }
}
// end of km formula calculations
