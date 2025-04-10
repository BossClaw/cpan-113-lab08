// Part 1 : UNDERSTANDING AND CREATING OBJECTS

// P1.1 MAKE THE DATA
const student = {
    // INFO
    name: "Dardar LeCrawCraw",
    age: 40,
    enrolled: true,
    courses: ["Programming", "Figure Drawing", "French Polynesia Politics of the 1800s", "Cheese appreciation"],
    favorite_foods: ["Pizza", "Rice & Veg", "Coffee"],

    // FUNCS
    displayInfo: function () {
      return `Student Info\n  - Name ${this.name}\n  - Age  ${this.age}\n  - Enrolled ${(this.enrolled ? 'Y' : 'N')}`;
    }
  };
  


  // P1.1(2) OUTPUT
  console.log("Part 1 Output");
  console.log(`Name ${student.name}`);
  console.log(`Age  ${student.age}`);  
  console.log(student.displayInfo());
  