//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.
//This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().
//This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().
//This 2nd method should print out the various parts that are essential to building a class.
//Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
  constructor(purpose, parts) {
    this.purpose = purpose;
    this.parts = parts;
  }

  explain() {
    return this.purpose;
  }

  pieces() {
    return this.parts;
  }
}

const reason = new WhyClass(
  'In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state, and implementations of behavior',
  'constructor, properties, and methods'
);

console.log(reason.explain());

console.log(reason.pieces());

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  
To jog your memory, some different types of wildlife that you observed are found in the 
following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class Animal {
  constructor(name, type, color, attitude, action) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.attitude = attitude;
    this.action = action;
  }
}

let animal1 = new Animal('River Dolphin', 'mammal', 'pink', 'friendly', [
  'probing',
  'sonar',
]);

console.log(animal1);

let animal2 = new Animal('Capybara', 'rodent', 'brown', 'shy', [
  'swim',
  'dive',
]);

console.log(animal2);

let animal3 = new Animal(
  'Jaguar',
  'mammal',
  ['yellow', 'black', 'white', 'spotted'],
  'agressive',
  ['swims', 'territorial']
);

console.log(animal3);

let animal4 = new Animal(
  'Toco Toucan',
  'bird',
  ['black', 'white', 'yellow'],
  'friendly',
  ['sociable', 'hunter']
);

console.log(animal4);

let animal5 = new Animal('Black Caiman', 'reptile', 'green', 'agressive', [
  'hunting',
  'swimming',
]);

console.log(animal5);

let animal6 = new Animal(
  'South American River Turtle',
  'reptile',
  'green',
  'shy',
  ['swimming', 'grow up to 200lbs']
);

console.log(animal6);

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  constructor(name, sides, base, height, length, width, radius) {
    this.name = name;
    this.sides = sides;
    this.base = base;
    this.height = height;
    this.length = length;
    this.width = width;
    this.radius = radius;

    //Triangle Formula
    this.area = () =>
      console.log(`The area of the Triangle is ${this.base * this.height}`);
    this.perimeter = () =>
      console.log(`The perimeter of the Triangle is ${this.base + this.sides[1] + this.sides[2]}`);

    //Rectangle Formula
    this.area2 = () => console.log(`The area of the Rectangle is ${this.length * this.width}`);
    this.perimeter2 = () => console.log(`The perimeter of the Rectangle is ${2 * this.length + 2 * this.width}`);

    //Circle Formula
    this.area3 = () =>
      console.log(`The area of the Circle is ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    this.circumference = () => console.log(`The circumference of the Circle is ${(2 * Math.PI * this.radius).toFixed(2)}`);
  }
}

const shape1 = new Shape('Triangle', [4, 7, 7], 4, 6.7);
console.log(shape1);
shape1.area();
shape1.perimeter();

const shape2 = new Shape('Rectangle', 4, null, null, 2, 5, null);
console.log(shape2);
shape2.area2();
shape2.perimeter2();

const shape3 = new Shape('Circle', 1, null, null, null, null, 5);
console.log(shape3);
shape3.area3();
shape3.circumference();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  
//Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  
//Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, 
//you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth. 
Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Planet {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Planet('earth', 3);
console.log(earth);
