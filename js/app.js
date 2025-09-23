// Barcha love buttonlar
const loveBtns = document.querySelectorAll(".loveBtn");
// Barcha eye buttonlar
const eyeBtns = document.querySelectorAll(".eyeBtn");

// Love button toggle
loveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("bg-red-500"); 
    btn.classList.toggle("text-white"); 
  });
});

// Eye button action
eyeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Men seni ko'ryapman Olma 👀");
  });
});

// DROPDOWN
const dropdowns = [
    { button: "dropdownHomeLink", icon: "iconHome" },
    { button: "dropdownShopLink", icon: "iconShop" },
    { button: "dropdownPagesLink", icon: "iconPages" },
    { button: "dropdownBlogLink", icon: "iconBlog" }
  ];
  
  dropdowns.forEach(d => {
    const btn = document.getElementById(d.button);
    const icon = document.getElementById(d.icon);
  
    if (btn && icon) {
      btn.addEventListener("click", () => {
        icon.classList.toggle("rotate-180");
      });
    }
  });

  // Countdown 
const countdownDate = new Date().getTime() + (2 * 60 * 60 + 18 * 60 + 46) * 1000;

// Timer element
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secsEl = document.querySelector("#secs");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    // timer died
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minsEl.innerText = "00";
    secsEl.innerText = "00";
    clearInterval(timerInterval);
    return;
  }


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  daysEl.innerText = String(days).padStart(2, "0");
  hoursEl.innerText = String(hours).padStart(2, "0");
  minsEl.innerText = String(minutes).padStart(2, "0");
  secsEl.innerText = String(seconds).padStart(2, "0");
}


const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();



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
