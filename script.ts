// // script.ts

// // Basic types
// let names: string = "intiqam";
// let age: number = 20;
// let isActive: boolean = true;

// function greet(name: string, age: number): string {
//   return `Hello ${name}, you are ${age} years old.`;
// }
// console.log(greet(names, age));

// // Interface definition
// interface Person {
//   name: string;
//   age: number;
//   greet(): string;
// }

// class Student implements Person {
//   name: string;
//   age: number;
//   studentId: number;

//   constructor(name: string, age: number, studentId: number) {
//     this.name = name;
//     this.age = age;
//     this.studentId = studentId;
//   }

//   greet(): string {
//     return `Hello, I am ${this.name}, a student with ID: ${this.studentId}. I am ${this.age} years old.`;
//   }
// }

// // Get references to DOM elements
// const nameInput = document.getElementById("name") as HTMLInputElement;
// const ageInput = document.getElementById("age") as HTMLInputElement;
// const greetingDiv = document.getElementById("greeting") as HTMLDivElement;
// const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

// submitBtn.addEventListener("click", () => {
//   const name = nameInput.value;
//   const age = Number(ageInput.value);

//   const student = new Student(name, age, 12345);

//   greetingDiv.textContent = student.greet();
// });

// // Generic function identity
// function identity<T>(value: T): T {
//   return value;
// }

// const stringValue = identity<string>("intiqam");
// const numberValue = identity<number>(42);

// console.log(stringValue);
// console.log(numberValue);

// // Namespace Utility
// namespace Utility {
//   export function capitalize(str: string): string {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
// }

// // Use Utility namespace in the Student class
// class Student implements Person {
//   name: string;
//   age: number;
//   studentId: number;

//   constructor(name: string, age: number, studentId: number) {
//     this.name = Utility.capitalize(name); // Capitalize the name
//     this.age = age;
//     this.studentId = studentId;
//   }

//   greet(): string {
//     return `Hello, I am ${this.name}, a student with ID: ${this.studentId}. I am ${this.age} years old.`;
//   }
// }

// // Extending Person with additional properties
// interface Person {
//   address: string;
// }

// class Teacher implements Person {
//   name: string;
//   age: number;
//   address: string;
//   subject: string;

//   constructor(name: string, age: number, address: string, subject: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.subject = subject;
//   }

//   greet(): string {
//     return `Hello, I am ${this.name}, a teacher of ${this.subject}. I live at ${this.address}.`;
//   }
// }

// // Declare an ambient namespace for jQuery
// declare namespace jQuery {
//   function $(selector: string): {
//     html(content: string): void;
//   };
// }
// jQuery.$("#greeting").html("Hello, this is a greeting from jQuery.");

// // Nominal typing with StudentID and TeacherID
// type StudentID = { _type: "StudentID"; value: number };
// type TeacherID = { _type: "TeacherID"; value: number };

// function createStudentId(value: number): StudentID {
//   return { _type: "StudentID", value };
// }

// function createTeacherId(value: number): TeacherID {
//   return { _type: "TeacherID", value };
// }

// let studentId: StudentID = createStudentId(123);
// let teacherId: TeacherID = createTeacherId(456);
