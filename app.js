//programs of single way condition

//Program 1
function age(){
    let age=prompt("Enter you age");
    if(age>=15){
    alert("you are mature");
}
}


//Program 2
function passed(){
    let marks=prompt("Enter your marks");
    if(marks>=60){
    alert("You have passes the exam")
    }

}


// //program 3
function Hormuud(){
    let number=prompt("Enter your sim key number: 61,62,68");
    if(number==61){
    alert("you have Hormuud number")
}

}


// //program 4
function hot(){
    let temperature=prompt("Enter your temperature");
    if(temperature>=37){
    alert("Hot")   
    }

}


// //program 5
function correctPassword(){
    let password=prompt("Enter your password");
    let correctPassword="1234";
    if(password==correctPassword){
    alert("Welcome")
    }

}


// //programs of double ways condition

function olderAge(){
    let age1=prompt("Enter your age");
    let age2=prompt("Enter your age");
    if(age1>age2){
    alert(age1 +"is older");
    }else{
    alert(age2 + "is younger");
    }

}



// //program 2
function exam(){
    let marks1=prompt("Enter your marks");
    if(marks1>=60){
    alert("You have passes the exam")
    }else{
    alert("You have failed the exam")
    }

}


// //program 3
function temperature(){
    let temprature1=prompt("Enter your temperature");
    if(temprature1>=37){
    alert("Hot")
    }else{
    alert("Cold")
    }

}


// //program 4

function passwordChecker(){
    let password1=prompt("Enter your password");
    let correctPassword1="1234";
    if(password1==correctPassword1){
    alert("<h2>Welcome<h2>")
    }else{
    alert("<h2>Wrong password<h2>")
}

}


//program 5

function eligible(){let check=prompt("Enter your age to check")
if(check>=18){
alert("<h2>you are eligible to vote<h2>")
}else{
alert("<h2>you are not eligible to vote<h2>")
}

}



// //programs of multiple ways condition

//ELSE-IF
function grade_checker(){
    let grade=prompt("Enter your marks");
    if(grade>=80){
        alert("Grade A")
    }else if(grade>=60){
        alert("Grade B")
    }else if(grade==59){
        alert("Grade C")
}else{alert("Fail")
}

}
function age_checker(){
    let checker=prompt("Enter you age to check")
    if(checker>=15){
        alert("You are Adult")
    }else if(checker>=9 || checker==14){
        alert("Your are Teenage")
    }else{
        alert("You are still child")
    }
}
function discount(){
    let price=prompt("Enter the total amount of your order")
    if(price>=100){
        alert("Congrats,You have got 20% discount")

    }else if(price=70||price==99){
        alert("Congrats,you have got 10% discount")
    }else if(price>50 || price==69){
        alert("congrats,you have got 5% discount")
    }else{
        alert("You had no discount")
    }
}

function attendance(){
    let attendance=prompt("Enter your attendance percentage")
    if(attendance>=90 || attendance==100){
        alert("Excellent")

    }else if(attendance>=75 || attendance==89){
        alert("very Good")
    }else if(attendance>=65 || attendance==74){
        alert("good")
    }else{
        alert("Poor")
    }
}

function carSpeed(){
    let speed=prompt("Enter car speed")
    if(speed>=120){
        alert("Very speed")
    }else if(speed>=80){
        alert("Fast")
    }else{
        alert("Noraml")
    }
}


//Multiple-Switch

function carSpeed2(){
    let speed1=prompt("Enter car speed")
    switch(true){
        case speed1>=120:
            alert("Very fast")
            break;
        case speed1>=80:
            alert("Fast")
            break;
        case speed1>1 || speed1==79:
            alert("Normal")
            break;
        default:alert("Invalid input")
    }
}

function attendance1(){
    let attendance1=prompt("Enter your attendance percentage")
    switch(true){
        case attendance1>=90 || attendance1==100:
        alert("Excellent")
        break;
        case attendance1>=75 || attendance1==89:
        alert("very Good")
        break;
        case attendance1>=65 || attendance1==74:
        alert("good")
        break;
        case attendance1>1 || attendance1==64:
            alert("poor")
        break;
        default: alert("Invalid input")
    }

}
function discount1(){
    let price=prompt("Enter the total amount of your order")
    switch(true){
       case price>=100:
        alert("Congrats,You have got 20% discount")
        break;
        case price=70||price==99:
        alert("Congrats,you have got 10% discount")
        break;
        case price>50 || price==69:
        alert("congrats,you have got 5% discount")
        break;
       
        case price>1||price==49: alert("You had no discount")
        default:("Invalid input")
    }

    }

function age_checker1(){
    let checker=prompt("Enter you age to check")
    switch(true){

    
    case checker>=15:
        alert("You are Adult")
        break;
    case checker>=9 || checker==14:
        alert("Your are Teenage")
        break;
    case checker>1||checker==8:
        alert("You are still child")
        break;
    default:alert("Invalid input")
    }
}
function grade_checker1(){
    let grade=prompt("Enter your marks");
    switch(true){
        case grade>=80:
        alert("Grade A")
        break;
    case grade>=60:
        alert("Grade B")
        break;
    case grade>1 || grade==59:
        alert("Fail")
        break;
    default:("invalid input")
    
    }

}

//if programs choice
function If(){
do{
    subchoice=Number(prompt("If Programs choice 1-5\n 1.Mature check \n 2.Exam passed \n 3.Sim check \n 4.Hot weather \n 5.correctPassword \n 0.Back to menu"))
    switch(subchoice){
        case 1:age(); break;
        case 2:passed(); break;
        case 3:Hormuud(); break;
        case 4:hot(); break;
        case 5:correctPassword(); break;
        case 0:break;
        default: alert("Invalid entry, Please try again and choice 1-5");
    }

}while(subchoice!=0)
}

//Double programs if/else if 
function double(){
    do{
        subchoice=Number(prompt("Multiple way conditions \n 1.Older/young Age \n 2.Exam Pass or Fail \n 3.Tempreture \n 4.Password Checker \n 5.eligble To vote \n 0.Return to main menu"))
        switch(subchoice){
            case 1:olderAge();break;
            case 2:exam(); break;
            case 3:temperature(); break;
            case 4:passwordChecker(); break;
            case 5:eligible(); break;
            case 0: alert("Returning to main menu");  break;
            default:alert("Invalid entry, Please try again and choice 1-5");
        }

    }while(subchoice!=0)
}

//Nested and switch condition

function nested(){
    do{
        subchoice=Number(prompt(" Nested and switch \n \n Nested \n 1.Grade checker \n 2.Age checker \n 3.Discount \n 4.Attendance \n 5.Car speed \n\n\n  Switch \n 6.Grade checker \n 7.Age checker \n 8.Discount \n 9.Attendance \n 10.Car speed \n 0.Retunr to main menu"))
        switch(subchoice){
            case 1:grade_checker();break;
            case 2:age_checker();break;
            case 3:discount();break;
            case 4:attendance();break;
            case 5:carSpeed();break;
            //switch section
            case 6:grade_checker1();break;
            case 7:age_checker1();break;
            case 8:discount1();break;
            case 9:attendance1();break;
            case 10:carSpeed2();break;
            case 0:alert("Returning to the main menu"); break;
            default:alert("invalid entry please enter 0-10")
        }
    }while(subchoice!=0)
}

let choice;
let subchoice;

function mainmenu(){


do{
    choice=Number(prompt("Assignment programs \n 1.One way condition Programs\n 3.multiple way condition Programs \n 3.Nested and swtich condition Programs \n Please Enter 1-3 and 0 to Exit"));
    switch(choice){
        case 1:If();break;
        case 2:double();break;
        case 3:nested();break;
        default:alert("Invalid entry, Please try again and choice 1-3")
    }
}while(choice!=0)
    }

    mainmenu();