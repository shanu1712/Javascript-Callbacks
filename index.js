//callbacks function//

// creating an arrays of objects//
/*first we will run this and it is giving an output of 1st- student data has been fetched.
2nd-student data has been enrolled*/

//this is the first time function//

/*const student = [{ name: "Shanu", profession: "software developer" }, { name: "divyanshu", profession: "software developer" }];
//console.log(student);

function enrollStudent(data) {
  setTimeout(function(){
    student.push(data);
    console.log("student has been enrolled");

  }, 3000);
}

function getStudent() {
  setTimeout(function(){
    student.forEach(function(data) {
      //console.log(students);
      console.log("data has been fetched");
    });
    //console.log("students have been fetched");

  }, 1000);
 
   //console.log("students have been fetched");
};
 console.log(student);
console.log("student data has been fetched");
let datas = { name: "Shweta", profession: "software engineer" }
enrollStudent(datas,getStudent);
*/
//now i want that my new data should be pushed into the above main student data//

const student = [{ name: "Shanu", profession: "software developer" }, { name: "divyanshu", profession: "software developer" }];
//console.log(student);

function enrollStudent(data,callback) {
  setTimeout(function() {
    student.push(data);
    console.log("student has been enrolled");
    callback();
console.log(student);//now the data has been pushed in the student data
    //alert("all datas have been inserted");
  }, 5000);
}

function getStudent() {
  setTimeout(function() {
    student.forEach(function(data) {
      //console.log(students);
      console.log("data has been fetched");
    });
    //console.log("students have been fetched");

  }, 1000);

  //console.log("students have been fetched");
};
console.log(student);
console.log("student data has been fetched");
let datas = { name: "Shweta", profession: "software engineer" }
enrollStudent(datas,getStudent);
//getStudent();
