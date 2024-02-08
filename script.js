//DOM (document object model) manupilation is a frontend javaScript
//that represents the structure of a document as a tree of object
//html is a real DOM (it is tree like structure and it is in the form of object

//4 pillars of DOM
//1.selecting of an element
//2.changing HTML
//3.changing CSS
//4.event listener

//selecting of an element
//show in console that you select
var a = document.querySelector("h1")
console.log(a)

//changing html
var a = document.querySelector("h1")
a.innerHTML = "bye bye" //previous h1 is changed to new h1(bye bye)

//changing css
var a = document.querySelector("h1")
a.style.color = "red" //style is mandatory even if your css file name different
a.style.backgroundColor="black"

//event listener
//event -> movements done in website  like drag,click,mouse move etc
//listener -> observe the movement and react upon it
var a = document.querySelector("h1")
a.addEventListener("click",function(){
    //console.log("hey")         //when you click on h1 the "hey" is seen on console
})

//implement to change h1 text when click
var a = document.querySelector("h1")
a.addEventListener("click",function(){
    a.innerHTML= "changed text after click"
    a.style.color = "yellow"
    a.style.backgroundColor = "#000"
})


//for bulb to turn it on only
var bulb = document.querySelector("#bulb")
var button = document.querySelector("button")

button.addEventListener("click",function(){
    bulb.style.backgroundColor="yellow"
    //console.log("Click done")
})

//for bulb to work for both turn on and off
var bulb = document.querySelector("#bulb")  //or we can also use document.getElementById("bulb") for id
var button = document.querySelector("button")   //and for class same as above i.e .getElementByClassName("bulb")
 
var flag =0

button.addEventListener("click",function(){
    if(flag == 0){
       bulb.style.backgroundColor="yellow"
       console.log("Click done")
       flag=1
    }else{
        bulb.style.backgroundColor="transparent"
        console.log("Again Click done")
        flag=0
    }

})

//selecting multiple elements at a time
var h = document.querySelectorAll("h1")
console.log(h)     //but it will show in the form of array i.e [h1, h1, h1, h1]

h.forEach(function(e){
    console.log(e)     //to display individually in console we use forEach()
})


//checking content inside box
var box = document.querySelector("#box")
box.innerHTML = "<h1>Hello</h1>"
// box.textContent = "<h1>Hello</h1>"





