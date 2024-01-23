// console.log("hello kiruthika") //print
//
// var x=10;//variable declaration
// var y=12;
// console.log(x+y)
//
// var a='kiru'
// var b=12;
// console.log(a+b)//output=kiru12
//
// var v=true
// var e=10;
// console.log(v+e)//output=11 ----10+1(true)=11
//
// var firstname="kiru"
// var lastname="thika"
// console.log(`name: ${firstname}${lastname} ${1+2}`)//concat the string  ` back tic operator
//
// var num1=-1;
// var num2=-9;
// console.log(num1+num2)
//
// var name="kiruthika"
// var num3=-1;
// console.log(name+num3)
//
// function sum(num1,num2){
//     return num1+num2;
// }
// //named function
// var result=sum(2,4)
// console.log(result)   // function call $ declaration
//
// function mul(n1,n2){
//     console.log(n1*n2)
// }
// mul(2,3)
//
//
//
//
// //anonymous function
// var division=function (a,b){
//     console.log(a/b)
// }
// division(8,2)
//
// //anonymous function -- arrow function
//
// var addition=(s,d) => {
//     console.log(s+d)
// }
// addition(2,3)
//
// //block scope
// var t=12
// if(t==12){
//     let namelet="twelve"
//     console.log(namelet)
// }
//
// //hoisting
// console.log(kiru);
// var kiru="kkk"
//
//
// if(true){
//     let kt=12;
//     kt=12;
//     console.log(kt)
// }
// if(true){
//     const kte=12;
//     kte=12;
//     console.log(kte)
// }
//
//

// function a(b){
//     console.log("hii");
//     b();
// }
// function b(){
//     console.log("hello");
// }
// a(b);


//ternary operator
// var oddEven=(a)=> {
//    return a%2==0?"Even":"Odd";
// }
// console.log(oddEven(11));
// const name="kiruthika"
// console.log("start")
// setTimeout(() => {
//    console.log('Hi ' + name)
// },2000);
// console.log("end")

// arr=[1,2,"apple",true]
// console.log(arr)
// console.log(arr.length)
// console.log(arr.push(5))
// arr[5]=12;
// console.log(arr)
// arr.pop(-1)
// console.log(arr)

// array=[1,2,3,4,5,6,7]
// const spliced=array.splice(2)
//     console.log(array,spliced)

// array=[1,2,3,4,5]
// var len=array.length;
// var len1=len+5;
// for(var i=6;i<=len1;i++){
//     array.push(i)
// }
// console.log(array)
// const spliced=array.splice(5,5)
//     console.log(array,spliced)

//  var arr1=[1,2,3]
// var arr2=[]
// // for(var element of arr1){
// //     arr2.push(element*2)
// // }
// arr1.forEach((element) => {
//     arr2.push(element*2)
// })
// console.log(arr2)


// var arr=[11,2,30]
// const result=arr.map((element) => {
//     return element%2==0?"Even":"Odd"
// })
// console.log(result)
//
//
// const result1=arr.map((element) => {
//     var k= element%2==0?"Even":"Odd"
//     console.log(k)
// })

// const fruits =["Apple","orange","banana","graps"]
// const result=fruits.filter((i) => i.length>5);
// console.log(result)

//sorting
// var arr=['z','r','a','d']
// var sort1=arr.sort()
// console.log(sort1)

// var object={
//     name:"Kiruthika",
//     age:20,
//     name1:'m'
// }
// // object.year=2000;
// // console.log(object)
// // console.log(`${object.name} ${object.name1} is ${object.age}`)
//
// for(var key in object){
//     console.log(key+": "+object[key])
// }
// var obj2= object
// object.age1=21;
// console.log(obj2 === object)


// var student={
//     name:"kiruthika",
//     age:20,
//     marks:{
//         science:30,
//         maths:70,
//         social:89
//     }
// }
// console.log(student.marks.social)

// const students=[{
//     name:"Tony",
//     age:25,
//     grade:9.2
// },
// {
//     name:"raja",
//     age:26,
//     grade:8.2
// },
// {
//     name:"a",
//         age:20,
//     grade:9.8
// }]
// const result=students.sort((a,b) => a.grade-b.grade)
// console.log(`Topper: ${result[0].name} Least Grade:${result[result.length-1].name}`)
// console.log(12=="12")
// var arr=[0,3,5,undefined,2,null,1,4,false,true,0,-1,"raja"]
// const result=arr.filter(ele=>ele);
// console.log(result)

// var str1="Focus on the good"
//
// // var count=0;
// // for(var ele of str.trim()){
// //      if(ele==' '){
// //          count=count+1;
// //      }
// // }
// // console.log(count+1)
// // console.log(str.split(' ').length)
//
// console.log(str1.split(' ').reverse().join(" ").toLowerCase())

// var string1="hello world"
// // console.log(string1.trim().toUpperCase())
// var s2=string1.split(' ');
// var result=s2.map((ele)=>{
//     console.log(ele.charAt(0).toUpperCase()+ele.slice(1))
//
// })


// var s2=str1.split('');
// var s3=s2.reverse().join( " ")
// console.log(s3)



// var str1="Hello world"
// var k=str1.split('').reverse().join("")
// console.log(k.split(' ').reverse().join(" "))
// console.log(str1.replaceAll('o', 'a'));



// const condition=false
// const p1=new Promise((resolve,reject)=>{
//     if(condition){
//         resolve(10)
//     }
//     else{
//         reject("Error")
//     }
// })
// // console.log(p1)
// p1.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log('error =>',error)
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

const handleSubmit = () =>{
    const name=document.getElementById('name').value
    const age=document.getElementById('age').value
    console.log(name,age)

}
















