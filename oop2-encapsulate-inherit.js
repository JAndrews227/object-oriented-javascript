/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
    Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  
    Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. */

    //your code here...

    class Book {

            #author = "";
            #publisher = "";

        constructor() {

            this.#author 
            this.#publisher 

        };

            

            getAuthorsName(){
                return this.#author
            }

            getPublisherName(){
                return this.#publisher
            }
    }
    
    
    class Author{

            #name = "";
            #books = "";

        constructor(name, books){
            
            this.#name = name;
            this.#books = books;
        }

        getWritersName(){
            return this.#name
        }
        getBookTitles(){
            return this.#books
        }

    }

    class Publisher{

        #authors = "";
        #books = "";

    constructor(authors, books){
        
        this.#authors = authors;
        this.#books = books;
    }

    getPublishedAuthors(){
        return this.#authors
    }
    getPublishedBooks(){
        return this.#books
    }
}

    class Review{

        #rating = "";
        #user = "";

    constructor(rating, user){
    
        this.#rating = rating;
        this.#user = user;
    }

    getReviewRating(){
        return this.#rating
    }
    getReviewUser(){
        return this.#user
    }
}


  




/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization. 
     (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  
    Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 
    1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes 
    are supposed to be representing.*/



    //your code here...

        class Umbrella {

                    headQ = "Fiat Chrysler Automobiles"

            constructor(){
               
                this.headQ
            }

            inCharge = () => {
                console.log(`${this.headQ} runs the show!`)
            }
            

        }

        let boss = new Umbrella();
        boss.inCharge();



        class Company extends Umbrella {

                brand = ['Ram','Dodge', 'Maserati']

            constructor(headQ){

                super(headQ);
                this.location; 
                this.brand; 
                this.staff;
        }

        displayRam = () => {
            console.log(`${this.brand[0]} is within the ${this.headQ} unbrella.`);

        }

        displayDodge = ()=> {
            console.log(`${this.brand[1]} is within the ${this.headQ} unbrella.`);

        }
        
        displayMaserati = ()=> {
            console.log(`${this.brand[2]} is within the ${this.headQ} unbrella.`);

        }
    }

        const Ram = new Company;
        Ram.displayRam();

        const Dodge = new Company;
        Dodge.displayDodge();

        const Maserati = new Company;
        Maserati.displayMaserati();


        class Site extends Company{

            site = ['Arlington, TX', 'Auburn Hills, MI', 'Modena, Italy' ]

            constructor(headQ, brand) {

                super(headQ, brand);
                this.site;

            }

            displayRamSite = () => {

                console.log(`${this.brand[0]}'s HQ is located in ${this.site[0]}`)
            }

            displayDodgeSite = () => {

                console.log(`${this.brand[1]}'s HQ is located in ${this.site[1]}`)
            }

            displayMasSite = () => {

                console.log(`${this.brand[2]}'s HQ is located in ${this.site[2]}`)
            }



        }

            const ramSite = new Site;
            ramSite.displayRamSite();

            const dodgeSite = new Site;
            dodgeSite.displayDodgeSite();

            const masSite = new Site;
            masSite.displayMasSite();


        
        class Employee extends Site {

            employee = ['Splinter', 'Leo', 'April', 'Donnie', 'Baxter', 'Hamato Yoshi', 'Venus del Milo', 'Mikey', 'Raph', 'Casey Jones'];

            job = ['CEO', 'Manager', 'Secretary', 'Engineer', 'Finance Manager', 'Marketing Manager', 'HR Manager', 'Lawyer', 'Janitor'];

            salary = ['5.5 million', '2.5 million', '2 million', '4 million', '50 thousand'];

               
                constructor(headQ, brand, site) {

                super(headQ, brand, site)

                this.employee;
                this.job;
                this.salary;
            }

            displayCEO = () => {

                console.log(`${this.employee[0]} is the ${this.job[0]} of ${this.headQ} and makes ${this.salary[0]} per year!`)

            }
            
            displayManager = () => {

                console.log(`${this.employee[1]} is the ${this.job[1]} of ${this.brand[0]} in ${this.site[0]} and makes ${this.salary[1]} per year!`)
            }

            displaySecretary = () => {

                console.log(`${this.employee[2]} is the ${this.job[2]} of ${this.brand[0]} and makes ${this.salary[2]} per year!`)
            }    

            displayEngineer1 = () => {

                console.log(`${this.employee[3]} is the ${this.job[3]} of ${this.brand[0]} and makes ${this.salary[1]} per year!`)
            } 

            displayEngineer2 = () => {

                console.log(`${this.employee[4]} is the ${this.job[3]} of ${this.brand[2]} and makes ${this.salary[1]} per year!`)
            } 

            displayFinance = () => {

                console.log(`${this.employee[5]} is the ${this.job[4]} of ${this.headQ} and makes ${this.salary[2]} per year!`)
            } 

            displayMarket = () => {

                console.log(`${this.employee[6]} is the ${this.job[5]} of ${this.headQ} and makes ${this.salary[2]} per year!`)
            } 

            displayHR = () => {

                console.log(`${this.employee[7]} is the ${this.job[6]} of ${this.headQ} and makes ${this.salary[2]} per year!`)
            } 

            displayLaw = () => {

                console.log(`${this.employee[8]} is the ${this.job[7]} of ${this.headQ} and makes ${this.salary[3]} per year!`)
            } 

            displayClean = () => {

                console.log(`${this.employee[9]} is the ${this.job[8]} of all sites and makes ${this.salary[4]} per year!`)
            } 
        }

    const CEO = new Employee;
    CEO.displayCEO();

    const Manager = new Employee;
    Manager.displayManager();

    const Secretary = new Employee;
    Secretary.displaySecretary();

    const Engineer1 = new Employee;
    Engineer1.displayEngineer1();

    const Engineer2 = new Employee;
    Engineer2.displayEngineer2();

    const Finance = new Employee;
    Finance.displayFinance();

    const Market = new Employee;
    Market.displayMarket();

    const HR = new Employee;
    HR.displayHR();

    const Law = new Employee;
    Law.displayLaw();

   const Clean = new Employee;
    Clean.displayClean();



/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  
This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...