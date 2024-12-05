var age=25; //crating a global variable
// creating a displayAge function
function displayAge() {
  console.log("old age -"+age);//consoling old Age
  }
  //displayAge()
  //creating a new function ChangeAge 
function changeAge(newAge){
    age=newAge;//updating old Age with newAge
    console.log("NewAge - "+ age);
}
//calling displayAge function
displayAge(age);
//calling changeAge function
changeAge(40);