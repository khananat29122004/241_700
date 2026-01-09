/*
console.log("Hello world")
*/
/* 
//String
let fname = 'John'
fname = "korn"
//ประกาศค่าคงที่เปลี่ยนไม่ได้
const idcard = '123'

//number
let age =21
let height = 187.3
let weight = 78.24444

//boolean
console.log('name',fname ,"age",age)
console.log("age",age)
console.log("wet",weight)
console.log("id card= ",idcard)
*/
/*
let number1= 'khananat'//String
let number2= "j"
let number3=number1 + '    ' + number2

console.log('number3 =',number3)

let number5= 5
let number7= 5
let number4=number5 == number7

console.log('condition =',number4) //bolean
*/ 

/*
//condition statement (if,else,)
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเท่ากับ

*/
/*
let number1= 6
let number2= 6

//if -else
if (number1 > number2){
    console.log('condition true')
} else if(number1 == number2){
    console.log("this else if")
}else{
    console.log('condition f')
}
*/
/*
//ตัดเกรด
>=80 A
>= 70 B
>=60 
>=50
<50 F

let score = prompt("Your score")
if (score>=80){
    console.log('Grade A')
}else if(score>=70){
    console.log('Grade B')
}else if(score>=60){
    console.log('Grade C')
}else if (score>=50){
    console.log('Grade D')    
}else {
    console.log('Grade F') 
}
    */

/*
&& และ
|| หรือ
! ไม่
*/
/*
let number1 =5
let number2=10
let condition= !(number1>= 3 || number2 >= 5)
console.log('result of condition',condition)
*/
//หาเลขคู่คี่

/*
let number = 20
if (!(number% 2== 0)){
    console.log('คู๋')
}
*/
/*
// for
let counter= 0
while (counter<=10){
console.log('Hi')
counter = counter+1 //or counter +=1 ,counter++
}

for(let counter=0; counter<10; counter++){
    console.log('Hi')
}
    */
   //array

   /*
let age1= 20
let age2= 25
let age3= 30   
let ages= [20,25,30]
//แทนที่
ages=[100,222,223]
console.log("age all",age1,age2,age3)
console.log("array",ages)
console.log('index',ages[2])

//ต่อarray

ages.push(25)
console.log("push array,ages")
//ลบarrayตัวท้าย
ages.pop()
console.log('pop array',ages)
*/
 /*
let age= [20,25,30]
if (age.includes(30)) {
    console.log("have 30")
}

let name_list =['aa','bb','cc']
name_list.push('dd')
console.log(name_list)
name_list.pop()
console.log(name_list)
name_list.pop()
console.log(name_list.length)
console.log(name_list[2])
 */

// Object
/*
let student = [{
    age:30,
    name: 'somporn',
    grade :'A'
},{ 
    age: 25,
    name:'somyod',
    grade :'B'

}]
fot (letindex= 0; index<student.length;index++) {
    console.log("Student Number",(index+1))
    console.log("age",student[index].age)
}
*/
//Function
/*
let score1 =55
let score2 =65

function calculate_grade(score){
    if(score= 80){
    grade='A'
    }else if (score=70){
    grade='B'
    }else if (score=60){
    grade='C'
    }else if (score=50){
    grade='D'
    }else{
    grade='F'
}
return grade
}
let grade1=calculate_grade(score1)
console.log('Grade',grade)
*/
//array
/*
let score =[20,30,40,50]

for (let index=0;index<score.length;index++){
    console.log('score',score[index])
    }

let newScore=score.filter((s) =>
{
    return s >=30
})


score=score.map((s) => {
    return s*2
})

score.forEach ((s)=>{
  console.log('forEach Score',s)  
})
//if (score[index]=30){
       // newScore.push(score[index])}
*/
       //object fucn
       /*
let students=[
    {
        name:'aa',
        score:50,
        grade:'A'
    },{
        name:'bb',
        score:65,
        grade:'C'
    }
]
let student=students.find(() =>{
    if (s.name=='aa'){
    return true
    }
})
let double_score= student.map((s) =>{
    s.score=s.score*2
    return s
})
console.log(student)

console.log('double_score',double_score)
*/