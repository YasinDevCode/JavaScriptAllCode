const restaurants = [
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
    { name: "Kacchi Bhai", rating: 4.7 }
];

function topRatedRestaurant(restaurants) {
  let topRate=restaurants[0];
  for(let i=1; i<restaurants.length; i++){
    if(restaurants[i].rating >topRate.rating){
        topRate=restaurants[i];
    }
  }
  return topRate.name.toUpperCase();
}
console.log(topRatedRestaurant(restaurants));

// Real life project
