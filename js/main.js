// function directions(...args) {
//     let [start, ...remaining] = args;
//     let [finish, ...stops] = remaining.reverse();
//     console.log(`drive through ${args.length} towns`); // drive through 5 towns
//     console.log(`start in ${start}`); // main.js:5 start in Truckee
//     console.log(`the destination is ${finish}`); // main.js:6 the destination is Tahoma
//     console.log(`stopping ${stops.length} times in between`); // main.js:7 stopping 3 times in between
// }
// directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");


function Person(first, last, age, gender, interests) {

    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function () {

        let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';

        let heOrShe;
        if (this.gender === 'male' || this.gender === 'Male') {
            heOrShe = "He likes"
        } else if (this.gender === 'female' || this.gender === 'Female') {
            heOrShe = "She likes "
        } else {
            heOrShe = "They like "
        }
        //adding the gender to the rest of the array
        string += heOrShe

        if (this.interests.length == 1) {
            string += this.interests[0]
        } else if (this.interests.length == 2) {
            string += this.interests[0] + " and " + this.interests[1]
        } else {
            for (let i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += " and " + this.interests[i] + '.'
                } else {
                    string += this.interests[i] + ", "
                }
            }
        }
        alert(string);
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'karate']);
let person2 = new Person('Afrae', 'El Fatuaki', 25, "Female", ['pilates', 'reading'])
let person3 = new Person('Lina', 'Pascual', 18, "others", ['pilates', 'reading', 'singing', 'dancing', 'crossfit'])

//write this  person1.bio() in your console 
