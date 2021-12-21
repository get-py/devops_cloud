// 객체
// const age = "나이";
// const tom = {
//     "name": "Tom",
//     //"age": 10,  // == age: 10,
//     //["ag" + "e"]: 10,
//     [age]: 10,
// }
// console.log(tom);


const name = "Tom";
const age = 10;
const tom1 = {
    name: name,
    age: age,
    print: function () {
        // console.log(this.name, this.age);
        console.log(`안녕. 나는 ${this.name}이야.
${this.name}살이지`);
    }
}

tom1.print();
