var button = document.body.querySelector(".addGradeButton");
var nav =document.body.querySelector(".nav");
var text = document.body.querySelector(".text");
var number = document.body.querySelector(".number");
var display =document.body.querySelector(".display");

//makes it so that the text boxes don't show up everywhere
button.style.display="none";
nav.style.display="none";
text.style.display="none";
number.style.display="none";
var studentGrades = [];
var gradePages = [
  {
    title: "Grade View",
    content: ""
  },
  {
    title: "Add Grade",
    content: ""
  }
];
//checks to see if you signed in correctly
function submit(){
  var messEle=document.body.querySelector(".submit");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;
  
  if(username==="cool"&&password==="password"){
    gradeView();
     document.body.querySelector(".username").style.display="none";
     document.body.querySelector(".password").style.display="none";
     nav.style.display="inline";
     document.body.querySelector(".submit").style.display="none";


  }else{
    document.body.querySelector(".messEle").innerHTML="Incorrect";

    if(username!="cool"){
      document.body.querySelector(".messEle").innerHTML="Your Username is incorrect.";
    }
    if(password!="password"){
      document.body.querySelector(".messEle").innerHTML="Your Password is incorrect." ;
    }
    if(password!="password"&&username!="cool"){
      document.body.querySelector(".messEle").innerHTML="Your Username and Password are incorrect." ;
    }
  }
  
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})

//end of sign in
// adds pages

for(var i=0; i<gradePages.length; i++){
  new pageMaker(gradePages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="Write"){
    display.innerHTML=stuff;
  }else{
    writePage();
  }
  if (pg == "Grade View") {
    gradeView();
  } else if (pg == "Add Grade") {
    addGrade();
  }
  
}



writeStuff(gradePages[0].content, "Home");
//end add pages
function showGrades() {
  var grades = document.body.querySelector(".studentGrades");
  grades.innerHTML = "";
  for (var x = 0; x < studentGrades.length; x++) {
    var output = document.createElement("div");
    output.innerHTML = studentGrades[x];
    grades.appendChild(output);
}
}

showGrades();
writeStuff(gradePages[0].content, "Home");


//shows gradeView()

function gradeView(){
  button.style.display = "none";
  number.style.display = "none";
  text.style.display = "none";
  document.body.querySelector(".studentGrades").style.display="inline";
  document.body.querySelector(".Message").style.display="none";
  button.addEventListener("click", addGrades);
}

//end of gradeView()
 //shows addGrade()

function addGrade(){
  button.style.display = "block";
  text.style.display = "inline";
  number.style.display = "inline";
  display.innerHTML = "";
  document.body.querySelector(".studentGrades").style.display="none";
  document.body.querySelector(".Message").style.display="inline";
  button.addEventListener("click", addGrades);
}
//end grade view
// adds grades

function addGrades() {
  var name = document.body.querySelector(".text").value;
  var grade = document.body.querySelector(".number").value;
  var text ="Student Name: "+name+" | Grade: "+grade;
  if (name.length > 0) {
    if(grade>-1&&grade<=101){
      studentGrades.push(text);
      document.body.querySelector(".Message").innerHTML=""
      gradeView();
    }
    else{
      document.body.querySelector(".Message").innerHTML = "This grade is not valid, enter in a valid grade.";
    }
  }else{
    document.body.querySelector(".Message").innerHTML = "Enter in a valid name.";
  }
  showGrades();
}