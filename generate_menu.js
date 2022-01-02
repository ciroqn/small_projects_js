/*This project creates a randomly generated three-course menu with total price attached. The mechanism is an object which has three courses (arrays within objects)
and several functions (methods) which add dishes and prices to certain courses (i.e. appetisers, mains, desserts), and generates a three-course menu based on a 
random index. It also has getter and setter methods. */

/* Note the setters involve changing a menu item's name. To delete an item, it's probably easier to use .unshift() or .pop() (or another relevant method), rather than
use the setter to change the price.*/

let menu = {
  _courses: {
    appetisers: [],
    mains:[],
    desserts: []
  },
  get appetiser() {
    return this._courses.appetisers;
  },
  get main() {
    return this._courses.mains;
  },
  get dessert() {
    return this._courses.desserts;
  },
  set appetiser(appetiser) {
    this._courses.appetisers[0]['name'] = appetiser;
  },
  set main(main) {
    this._courses.mains[0]['name'] = main;
  },
  set dessert(dessert) {
    this._courses.desserts[0]['name'] = dessert;;
  },
  get courses() {
    return {
      appetisers: this.appetisers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randIndex];
  },
  generateRandomMeal() {
    let appetiserArray = this.getRandomDishFromCourse('appetisers');
    let appetiserName = appetiserArray['name'];
    let appetiserPrice = appetiserArray['price'];
    let mainArray = this.getRandomDishFromCourse('mains');
    let mainName = mainArray['name'];
    let mainPrice = mainArray['price'];
    let dessertArray = this.getRandomDishFromCourse('desserts');
    let dessertName = dessertArray['name']
    let dessertPrice = dessertArray['price'];
    let totPrice = appetiserPrice + mainPrice + dessertPrice;
    return `Your randomly generated three-course meal: 
    ${appetiserName},
    ${mainName},
    ${dessertName}
    The total price is $${totPrice}`;
  }
}
