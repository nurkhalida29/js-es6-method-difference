<script>
  // file: before-es6.js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log('Hello, my name is ' + this.name);
};

var person1 = new Person('NUR KHALIDA');
person1.sayHello();

  
  <script>
