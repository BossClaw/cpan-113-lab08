// Part 1 : UNDERSTANDING AND CREATING OBJECTS

// P1.1 MAKE THE DATA
const student = {
  // INFO
  name: "Dardar LeCrawCraw",
  age: 40,
  enrolled: true,
  courses: [
    "Programming",
    "Figure Drawing",
    "French Polynesia Politics of the 1800s",
    "Cheese appreciation",
  ],
  favorite_foods: ["Pizza", "Rice & Veg", "Coffee"],
  scores: [86, 96, 76, 66],

  // FUNCS
  displayInfo: function () {
    return `Student Info\n  - Name ${this.name}\n  - Age  ${
      this.age
    }\n  - Enrolled ${this.enrolled ? "Y" : "N"}`;
  },
};

const do_part_1 = false;
if (do_part_1) {
  console.log("Part 1: Understanding and Creating Objects Output");
  console.log();

  console.log(`Name ${student.name}`);
  console.log(`Age  ${student.age}`);
  console.log(student.displayInfo());
  console.log();
}

// Part 2: Working with JSON
const do_part_2 = false;
if (do_part_2) {
  console.log("Part 2: Working with JSON Output");
  console.log();

  const studentJSON = JSON.stringify(student);
  console.log(`JSON String [${studentJSON}]`);
  console.log();

  const newStudentObj = JSON.parse(studentJSON);
  console.log(`Parsed Obj:`);
  console.log(newStudentObj);
  console.log();

  let orig_matches_parsed =
    JSON.stringify(student) === JSON.stringify(newStudentObj);
  console.log(
    `Orig matches the stringified and re-parsed? ${
      orig_matches_parsed ? "Y" : "N"
    }`
  );
  console.log();
}

// Part 3: Using Destructuring Assignment
const do_part_3 = true;
if (do_part_3) {
  console.log("Part 3: Using Destructuring Assignment Output");
  console.log();

  const { name, courses } = student;
  console.log(`Destructured Name    ${name}`);
  console.log(`Destructured Courses ${courses}`);
  console.log();

  const [firstScore, secondScore] = student.scores;
  console.log(`First Score  ${firstScore}`);
  console.log(`Second Score ${secondScore}`);
  console.log();
}
