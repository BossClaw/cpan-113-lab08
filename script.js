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
  // console.log("Part 1 Output");
  // console.log(`Name ${student.name}`);
  // console.log(`Age  ${student.age}`);  
  // console.log(student.displayInfo());
  

  
  // Part 2: Working with JSON
  console.log("Part 2 Output");
  const studentJSON = JSON.stringify(student);
  console.log(`JSON String [${studentJSON}]`);
  console.log();
  
  const newStudentObj = JSON.parse(studentJSON);
  console.log(`Parsed Obj:`)
  console.log(newStudentObj);
  console.log();

  let orig_matches_parsed = JSON.stringify(student) === JSON.stringify(newStudentObj);
  console.log(`Orig matches the stringified and re-parsed? ${(orig_matches_parsed ? "Y" : "N")}`);
  
  