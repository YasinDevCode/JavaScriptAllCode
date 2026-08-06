// problem number One
function matchWinner(teamAGoals, teamBGoals) {
  if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invaild"
  }
 if(teamAGoals>teamBGoals){
    return "Team A Won";
 }else if(teamBGoals>teamAGoals){
    return "Team B won";
 }else{
    return "Draw"
 }
};

//problem Two Solve
function isElevatorSafe(weights) {
let totalWeights=0;
for(let i=0; i< weights.length; i++){
 totalWeights+=weights[i];
if(typeof weights[i]!== "number"){
    return "invalid";
}

}
  if(totalWeights<=400){
    return true;
  }else{
    return false;
  }
};

// problem Three 
function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed!=="number"){
        return "invalid";
    }
 if(tokensUsed<=500){
    return "0";
 }else{
    let extraCharge=tokensUsed-500;
    let charge=Math.floor(extraCharge/100)*5
    return charge;
 }
}
// Problem Four
function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants)|| restaurants.length===0){
        return "invaild";
    }
  let topRate=restaurants[0];
  for(let i=1; i<restaurants.length; i++){
    if(restaurants[i].rating >topRate.rating){
        topRate=restaurants[i];
    }
  }
  return topRate.name.toUpperCase();
}
// Problem Number Five Error Crrection
function averageResponseTime(times) {
  if (!Array.isArray(times) ) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }
   
  return total / times.length;
}



