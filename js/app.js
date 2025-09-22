// 1-topshiriq
// class Shape {
//     area() {
//       return 0;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
//     area() {
//       return Math.PI * this.radius ** 2;
//     }
//   }
  
//   class Square extends Shape {
//     constructor(side) {
//       super();
//       this.side = side;
//     }
//     area() {
//       return this.side ** 2;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super();
//       this.width = width;
//       this.height = height;
//     }
//     area() {
//       return this.width * this.height;
//     }
//   }
  
//   const circle = new Circle(5);
//   const square = new Square(4);
//   const rectangle = new Rectangle(3, 6);
  
//   console.log(circle.area().toFixed(2));
//   console.log(square.area());
//   console.log(rectangle.area());
  
// 2-topshiriq
// class Student {
//     constructor(id, name) {
//       this.id = id;
//       this.name = name;
//       this.grades = [];
//     }
  
//     addGrade(grade) {
//       this.grades.push(grade);
//     }
  
//     getAverage() {
//       if (this.grades.length === 0) return 0;
//       let sum = this.grades.reduce((a, b) => a + b, 0);
//       return sum / this.grades.length;
//     }
//   }
  
//   const student1 = new Student(1, "Ali");
//   student1.addGrade(5);
//   student1.addGrade(4);
//   student1.addGrade(3);
  
//   console.log(student1.name);
//   console.log(student1.grades);
//   console.log(student1.getAverage().toFixed(2));
  