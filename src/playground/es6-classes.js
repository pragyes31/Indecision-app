class person {
    constructor(name= "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription()  {
        console.log(`${this.name} is ${this.age} years old!!`)
    }
}

class traveller extends person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.homeLocation) {
            console.log(`hi, I'm ${this.name}, a ${this.age} year(s) old guys and I have come all this way from ${this.homeLocation}`)
        }
    }
}


const anon = new traveller();
const me = new traveller("Rahul", 29, " Jabalpur");
console.log(anon.getDescription(), me.getDescription());



