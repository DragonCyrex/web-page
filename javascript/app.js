'use strict';
let userName = prompt('what is your name?');
alert('welcome  '+userName);

let count =0;

let juice = prompt('Do you think I like juice').toLowerCase();
if(juice ==='yes' ||juice ==='y'){
    console.log('your answer is true');
    alert('good job '+userName);
    count++;
}else if (juice ==='no'||juice === 'n'){
    console.log('your answer is not true');
    alert('oops '+userName);
}else{alert(' your answer should be yes or no');
}


let tea = prompt('Do you think I like tea').toLowerCase();
if(tea ==='yes' || tea==='y' ){
    console.log('your answer is true');
    alert('great '+userName);
    count++;

}
else if (tea ==='no'|| tea ==='n'){
    console.log('your answer is not true');
    alert('oops '+userName);
}else{alert(' your answer should be yes or no');
}

let coffee = prompt('Do you think I like coffee').toLowerCase();
if(coffee ==='yes' || coffee ==='y'){
    console.log('your answer is true');
    alert('good answer '+userName);
    count++;

}else if (coffee ==='no' || coffee ==='n'){
    console.log('your answer is not true');
    alert('oops '+userName);
}else{alert(' your answer should be yes or no')}

let cats= prompt('Do you think I like cats').toLowerCase();
if(cats ==='yes'||cats ==='y'){
    console.log('your answer is true');
    alert('wow nice '+userName);
    count++;
}else if (cats ==='no'||cats ==='n'){
    console.log('your answer is not true');
    alert('oops '+userName);
}else{alert(' your answer should be yes or no');
}


let movies = prompt('Do you think I like movies').toLowerCase();
if(movies ==='yes'||movies==='y'){
        console.log('your answer is true');
        alert('yes  '+userName);
        count++;

}else if (movies ==='no'||movies==='n'){
    console.log('your answer is not true');
    alert('oops '+userName);
}else{alert(' your answer should be yes or no');
}

let oppertunits =4;
let age = prompt('what is my age? choose the correct answer from {20 ,21 ,22 ,23 ,24 }');
age =parseInt(age)
while(age != 23 && oppertunits != 0){
    age = prompt('try again!! you have '+oppertunits+' oppertunits.now choose the correct answer from {20 ,21 ,22 ,23 ,24 }')
    oppertunits--;

}

if(age == 23){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;

}else{alert('sory,but your answe not correct and Your attempts are over ');
}

let numChoose =0;
let answer =['coffe',' jem ',' see food ',' cars ',' my pc ',' video games'];
let userAnser;
do{
    userAnser = prompt('What do you think I like more of these options?'+answer).toLowerCase();
    numChoose++; 
    if(numChoose >=6){
        alert('sory,but your answe not correct and Your attempts are over')
    }  
}
 while(userAnser !== answer[0] && numChoose !=6);

 

alert('You have answered all the questions, welcome our web site');
alert('your scor is '+count);
console.log('your scor is '+count);

// for(let i=0 ;i<answer.length;i++){
  //   if(userAnser === answer[0]){
    //     alert('great answer');

     //}
 //}

 
