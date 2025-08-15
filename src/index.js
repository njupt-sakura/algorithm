function myNew(constructor_, ...args) {
  const obj = Object.create(constructor_.prototype);
  const ret = constructor_.apply(obj /** this */, args);
  return typeof ret === "object" && ret !== null ? ret : obj;
}

function Demo(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name, this.age);
  };
}

Demo.prototype.name2 = "aaa";
Demo.prototype.age2 = 22;
Demo.prototype.say2 = function () {
  console.log(this.__proto__.name2, this.__proto__.age2);
};

const demo = myNew(Demo /** constructor_ */, "bbb" /** name */, 23 /** age */);
console.log(demo.name, demo.name2); // aaa bbb
console.log(demo.age, demo.age2); // 22 23
demo.say(); // aaa 22
demo.say2(); // bbb 23

Demo.prototype.name2 = "ccc";
Demo.prototype.age2 = 24;
demo.say2(); // ccc 24
