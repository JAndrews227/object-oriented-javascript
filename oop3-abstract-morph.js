
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being 
instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  
These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are 
invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. 
In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 
unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

    class Creature {
        
        constructor(){

            if (this.constructor == Creature) {
                    
                    throw new Error ("Get off my CLASS!")

            }        
        }

        act() {

            throw new Error ("Get your ACT right")
        };



        move() {

            throw new Error ("Move over")
        };

    }

  //  const creature = new Creature();
  //  console.log(creature);

  //Class 1

    class Human extends Creature {

        name = "Scary Larry"

        weight = 300
        
        act() {

            console.log(`Humans like ${this.name} act like they are top of the food chain`)

        }

        move() {

            console.log(`${this.name} can't run fast from predators because he's ${this.weight} pounds and short!`)

        }

        dead() {

            console.log(`${this.name} plays dead in hopes all predators fall for it.`)
        }
    }

    const human = new Human();

    human.act();
    human.move();
    human.dead();


//Class 2

    class Reptile extends Creature{

        type = "Crocodile"
        weighs = 300
    

        act() {

            console.log(`The ${this.type} will roll Larry up if he comes near the swamp.`)

        }

        move() {

            console.log(`${this.type} can move fast despite weighing over ${this.weighs} pounds`)

        }

        smart() {

            console.log(`The ${this.type} does not fall for Larry's tactic.`)
        }

    }

    const reptile = new Reptile();

    reptile.act();
    reptile.move();
    reptile.smart();


//Class 3

    class Fish extends Creature{

        name = "Nemo"
        weight = 0.5

        act() {

            console.log(`The ${this.name} is scared of the Crocodile`)

        }

        move() {

            console.log(`${this.name} can move faster than the Crocodile because he weighs ${this.weight} pounds`)

        }

        relief() {

            console.log(`${this.name} is relieved for Larry's ignorance`)
        }

    }

    const fish = new Fish();

    fish.act();
    fish.move();
    fish.relief();



/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine 
how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep = () => {
        console.log(this.name + " is sleeping");
    }

    code = function() {
        console.log(this.name + " is coding");
    }

    repeat = function() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("I converted all the subclass functions into => functions to overide the main methods");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat = () => {
        console.log(this.name + " loves to teach before eating");
    }

    sleep = () => {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat = () => {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat = () => {
        console.log(this.name + " loves to eat before studying");
    }

    sleep = () => {
        console.log(this.name + " sleeps after studying for their code");
    }

    code = () => {
        console.log(this.name + " studies code and follows examples.");
    }

    repeat = () => {
        console.log(this.name + " eats, sleep, code and repeat");
    }

    explain() {
        console.log("I converted all the subclass functions into => functions to overide the main and previous sub methods");
    }

    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //eat method should print out - <stduent name> studies, then eats

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a 
    //coding guru!

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare = function() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("If you are looking for a random food to be selected you could set up a function array with a math.random to select any item");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

