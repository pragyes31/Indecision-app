// const getFirstName = (firstName) => {
//     return firstName.split(" ")[0];
// }

const getFirstName = (firstName) => firstName.split(" ")[0];
console.log(getFirstName("Apoorv Nayak"));

const multiplier =  {
    numbers:[1,2,3,4,5,6],
    multiplyBy:4,
    multiply: function() {
       return this.numbers.map((number) => number*this.multiplyBy); 
    }

};
console.log(multiplier.multiply())
