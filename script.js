
// OVERRIDE LOG TO APPEND LOGS TO DOM <pre> AS WELL AS LOG
const console_log_pre = document.getElementById("console_log_pre");
const originalLog = console.log;

console.log = function (...args) {
    const message = args.join(" ");
    console_log_pre.innerText += message + "\n";
    originalLog.apply(console, args);
};


// FETCH THE SCRIPT INTO THE <pre> AT RUNTIME
const rep = await fetch('./script.js');
const script_lines = await rep.text();
document.getElementById("script_js").innerText = script_lines;



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

  addCourse: function (newCourse) {
    this.courses.push(newCourse);
  },

  totalCourses: function () {
    return this.courses.length;
  },

  getAverageScore: function () {
    const total_of_all_scores = this.scores.reduce(
      (sum, curr) => sum + curr,
      0
    );
    const avg = total_of_all_scores / this.scores.length;
    return avg;
  },
};

const do_part_1 = true;
if (do_part_1) {
  console.log("Part 1: Understanding and Creating Objects Output");
  console.log();

  console.log(`Name ${student.name}`);
  console.log(`Age  ${student.age}`);
  console.log(student.displayInfo());
  console.log();
  console.log();
  console.log();
}

// Part 2: Working with JSON
const do_part_2 = true;
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
  console.log();
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
  console.log();
  console.log();
}

// Part 4: The Spread Operator
const do_part_4 = true;
if (do_part_4) {
  console.log("Part 4: The Spread Operator Output");
  console.log();

  const clonedStudent = {
    ...student,
    graduationYear: 2099,
    detentionHours: 169,
  };
  console.log(`Cloned Student with new Grad Year attribute`);
  console.log(JSON.stringify(clonedStudent));
  console.log();

  const newCourses = [
    "Saluting our new AI overlords (an etiquette guide)",
    "Penguins & Tariffs",
  ];
  student.courses = [...student.courses, ...newCourses];
  console.log(`Merged Student Courses`);
  console.log(student.courses);
}

// Part 5: Object Methods
const do_part_5 = true;
if (do_part_5) {
  console.log("Part 5: Object Methods Output");
  console.log();
  
  student.addCourse("Biodiversity & Microbreweries");
  console.log(`Courses after adding new one`);
  console.log(student.courses);
  console.log();
  console.log(`Total number of courses ${student.totalCourses()}`);
  console.log();
  console.log();
  console.log();
}

// Bonus Task: Calculate average score
const do_part_bonus = true;
if (do_part_bonus) {
  console.log("Bonus Task: Calculate average score Output");
  console.log();

  console.log(`Scores  ${student.scores}`);
  console.log(`Scores Count  ${student.scores.length}`);
  console.log();

  console.log(`Average Score  ${student.getAverageScore()}`);
}
