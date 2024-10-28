## Syllabus
| Topic                                   | state |
| --------------------------------------- | ----- |
| 1. [Basic](##1.BASIC)                   | ✅    |
| 2. [Object](##2.OBJECT)                 | ✅    |
| 3. [Dom](##3.DOM)                       | ✅    |
| 4. [Event](##4.EVENT)                   | ✅    |
| 5. [Asynchunous](##5.ASYNCHRONOUS)      |       |
| 6. [OOP](##6.OOP)                       |       |
| 7. [Error handling](##7.ERROR-HANDLING) |       |
| 8. [Advance Js](##8.ADVANCE-JS)         |       |




## 1. BASIC 
---
---


### what 
-  lightweight interpreted  , high level , multi-paradigm , single-threded , dynamically-typed , programming language.

### why 
- use to Make web page dynamic ,  render with html.

### ecmascript
- It is ensure that difrent documnets on js are actually talking about the same language
- js = ecmascript
- we use ES5 + ES6

### setup
- 2 way 
  1. write code in `.html` file
```html
...
<body>
 <script>
 //javascript code
 </script>
</body>...

example.html
```
   2. write code in `.js` file and link with html
```html
<body>

 <script src= "./index.js">
 </script>
</body>...

example.html
```

### variable
- container to hold data
- dynamictyped language so no need to maintion type
- 3 way to declare a variable
   1. using var      , eg- var a = "hello"
   2. using let       , eg- let b = 123
   3. using const   , eg- const = "world"

| Properties      | var | let | const |
| --------------- | --- | --- | ----- |
| global scoped   | ✔   | ✔   | ✔     |
| function scoped |  ✔    | ✔   | ✔     |
| block scoped    | ✖   | ✔   | ✔     |
| redeclared      | ✔   | ✔   | ✖     |
| reassign        | ✔   | ✖   | ✖     |
| add in          | ES1   | ES6 (2015)   | ES6 (2015)      |
| hoisting        | allowed    |  not allowed   |   not allowed    |

**def** hoisting : auto declarear on the top

### data type
1. **Primitive data type**
   - Number  => var num = 34.6
   - String      => var str = "i am ahsan"
   - Boolean   => var bool = true
   - Undefined => var yu = undefinde
   - Null           => var mi = Null
   
 **NOTE** : but also object wrapper for primitive type that have many inbuilt methods,  also can call method via primitive type.
         eg - let str = new String ();
         
2. **Non-pemitive data type**
   - Object => var obj = {name:"ahsan", roll : 12};
   - Array => var arr = [1,"hello", 2.5];
   - regexp => var num = 5 => var reg = \` the value of num= ${num}  \`

### operators 
1. Arithmetic operators => + , - , * , / , **, % , ++ , -- 
2. Assignment operators => = , += , *= , /= , %= , \*\*=
3. Comparision operators => == , != , === , !== , > , < , <= , >=
4. Logical operators => && , || , !
5. Bitwise operators => & , | , ^ , ~, << , >> , >>>
6. Special operators => ?: , , , delete , in , instanceof , new , typeof , void , yield

### conditional statement
1. if statement
2. if-else statement 
3. if-else ladder
4. switch statement

### loops
1. while loop
2. do-while loop
3. for loop
4. for in loop
5. for of loop

### function
- block of code perfoming a specific task.
  1. **Regular function**
    ```js
    function sum (a,b)
    {
    return (a+b);
    }
    
  console.log(sum (2,5));
```
    2. **Arrow function**
```js
    const sum = (a,b)=> 
    {
    return (a+b);
     }
   console.log(sum(2,5));
```
-  **Anonymous function** : function without name
- **Nested function** : function under the function
- **Callback function** : function pass as an  a argument to another fucntion

## 2. OBJECT
---
---
- **Nearly in js everything is an object except primitive type. **
- **But primitive also have object version (obejct wrapper).**

### object
- entity having state and behaviour  (property & method).
- js is a object-based language, js is template based not class based , here we don't create class to get the object but , we direct create objects.

### create object
- **3 way**

1. By object literal
```js
let obj = {
           name:"ahsan", 
		   age:20 , 
		   print: function (){ console.log("name = "+name)}
		   
		   }
```
 
 2.  By creating instance of object directly
```js
let obj = new Object();

obj.name = "ahsan";
obj.print = function (){ console.log("hello world")}
```

 3. By using an object constructor 
```js
function Person (name , age)
{
 this.name = name;
 this.age = age;
}

let obj = new Person ("ahsan",15);
```

- **object method**
 - hasOwnProperty() 
 - keys()
 - values()
 - etc

### Array 
- array is an object that can store multiple value at once
- 3 way to create array
    1. var arr = [value1 , value2 , value3]
    2. var arr = new Array() 
        arr[0] = value1
        arr[1] = value 2
    3. var arr = new Array(value1 , value2 , value3)
- array methods
  - arr.concat(arr2) --> return array contain both values
  - arr.pop() ---> remove last value & return 
  - arr.toString() ---> convert in string
  - splice(), slice(), reverse(), map(), filter(), shift(), unshift(), join() isArrays() , etc

### String
- String is a object that represent a sequence of characters.
- 2 way to create string
   1. var str = "hello world"
   2. var str = new String ("hello world")
- String method
   - toUppercase()
   - toLowercase()
   - Slice()
   - replace()
   - concate()
   - trim() , search(), charAt(), math() , Substring(), etc
 
### Number
- Number is an object , i may be integer or floating-point.
- var num = new Number (value)
- js Number constant 
   - MIN_VALUE --> return smallest number
   - MAX_VALUE --> return the largest number 
   - POSITIVE_INFINITY ---> return positive infinite , overflow value
   - NEGATIVE_INFINITY --> return negative infinity , overflow vlaue
   - NaN ---> represent "Not a Number" value
- Methods
   - isFinite()
   - isInteger()
   - parseFloat()
   - parseInt()
   - toExponential()
   - toFixed()
   - toPrecision()
   - toString()
### Boolean
- Boolean is an object , that represents value in two state true or false
- var b = Boolean (true);
- method
  - toSource()
  - toString()
  - valueOf()
### Date
- Date object can used to get , year, month
- 4 varient od Date constructor to create date object 
    1. Date()
    2. Date(milisecond)
    3. Date(dateString)
    4. Date(year,month,day,hours,minutes,secinds,milliseconds)
- Date methods
    - getDate()
    - getDay()
    - getFullyears()
    - getHours()
    - getMilliSeconds() , etc
### Math
- math obejct provides several constant and methods to perform mathmatical operation.
- unlink date object it doesn't have constructor
- method
  - abs() , acos() , asin() , atan()
  - cbrt() , ceil() , cos() , cosh() 
  - exp() , floor() , hypot() , log()
  - max() , min() ,pow() , random()
  - sign() , sin() , sinh() , sqrt()
  - tan() , tanh() , trunc()


## 3. DOM 
---
---

### Javascript in browser
- The browser has an embendded engine called js engine or js runtime.
- It is responsivel to run js code


### console object 
- Inbuilt objetct , The console object in JavaScript provides access to the browser's debugging console.
- console object method
   - arsert() ---> used to assert a condtion
   - clear()  ---> clear the console
   - log()    ---> output a message to the console
   - table()  ---> display a tabular data
   - warn()  ---> used for warning
   - error()  ---> used for special info 

### Interaction
- 1. alert : used to invoke a mini window with a msg => alert("helloo")
- 2. prompt : used to take user input as string prompt("head","input box")
- 3. confirm : shows a message ask yes or no => confirm ("do you want to delete")

### window object 
- The window object is supported by all browsers. **It represents the browser's window (display)**.
- All global JavaScript objects, functions, and variables automatically become members of the window object.
![[Pasted image 20230925152923.png]]
### bom
- The browser  object model represents additional object provided by the browser (host enviroment) for working with everything except the documnet.
- The function alert, confirm, prompt are also a part of the bom.

### dom
- dom stand for document object model.
- The document object represents the whole html documnet .
- documnet object is the root element that represent html documnet, it has properities & methods.
- with the help of documnet object perform dynamic change in html.
- the dom tree , window.document = document

![[Pasted image 20230925154112.png]]

- There are three type of nodes in the DOM tree
  1. element node ---> \<h1> hello world\</h1>  
  2. text node  ---> hello world
  3. commnet node --->  \<!-- comment -->

- methods 
  - write("string") ---> write the given string on the document
  - writeln("string") ---> write teh given string on the documnet with newline 
  - getElementById("id") ---> return the element having id value
  - getElementByName("name") ---> return all the element having the given name
  - getElementByTagName("name") --->return all the ele having the given tagname
  - getElementByClassName("name") ---> return all the ele having the class name
  - querySelectorAll("css selector") ---> return all the elemt match with css selector
  - querySelector("css selector") ---> return first the elemt match with css selector

### children of an element 
- ele.firstchild ---> access first child node of ele
-  ele.lastchild ---> access last child node of ele
-  ele.childNodes[index] ---> access child node of ele by index

-  ele.firstElementchild ---> accress first child ele of ele
- ele.lastElementchild ---> access last child element of the element
- ele.children[index]  ---> access child ele by index

### sibling & parent of an element node
- node.nextsibling ---> access next node
- node.PreviousSibling ---> access previous node
- node.parentNode ---> access parent elemnt

- node.nextElementsibling ---> access next node element
- node.PreviousElementSibling ---> access previous elemt
- node.parentElement ---> access parent elemt

### attribute of an element
- elem.hasAttribute("name") ---> check existence of an attribute
- elem.getAttribute("name") ---> used to get value of an attribute
- elem.setAttribute("name", "value") ---> set Attribute value
- elem.removeAttribute("name") ---> remove teh attribute from elemt
- elem.attributes() ---> get the collection of all attributes

### some important thing
- elem.innerHTML ---> use to write html in element
- elem.innertext ---> use to write text in elem
- elem.matches(css selector) ---> to check if elem matches the given css selector                                                           with elem
- elem.closet(css selector) ---> to took nearest ancestor that match the given css                                                     selector the itself is also checked
- elem-a.contains(elem-b)  --->  true if elem-a == elem-b , else false
- console.dir(element)  ---> shows the element as an obejct with its properties
- elem.textContent ---> show only text in the element 

### create & insert element
**way 1**
- step 1 : create ---> var a = document.CreateElement('div')
- step 2 : assign a class ---> a.className = 'box'
- step 3: (optional) a.innerHTML = '\<h1> hello \</h1>'
- step 4: insert ---> document.body.append(a) 
- some other method to insert 
   - node.append(a) ---> append at end the node
   -  node.prepend(a) ---> append in beginning node
   -  node.before(a) ---> append before the node
   -  node.after(a) ---> append after the node
   -  node.replacewith(a) ---> replace  
**way 2**
 - node.insertAdjacentHTNL("beforebegin",'\<p>hello\<p>')
 -  beforebegin --> before node
 -  afterend ---> after node
 - afterbegin ---> into node in begining
 - beforeend ---> into node in the end

### Some important method 
- node.remove() ---> to remove node
- elem.classList.add\/remove('class')  ---> add/remove class
- elem.classList.toggle('class') ---> add if not else remove
- elem.classList.contains('class') ---> check for given class contain or not

## 4. EVENT
---
---
**A event is an action that occures as per the user's instruction as input gives the output in response  *eg- mouse click , button press***

### event handle
- **1. using attributes :** \<button onclick = "function()">click\<button>
   - onclick  ---> when mouse click
   - onmouseover ---> cursor of the mouse over the ele
   - onmouseout ---> cursor of the mouse leaves the elem
   - onmousedown ---> mouse button is pressed
   - onmouseup ---> mouse button is released
   - onmousemove ---> mouse movemnet take place
   - onkeydown , onkeyup , onkeypress , onload , onunload , onresize, onfocus , onsubmit , onblur , onchange.
- **2. using addEventListener / removeEventListener**
   - elem.addEventListener("event", handler)
    - event eg : click , hover
    - handler : function that run when event occurs 

### the event object 
- when an event happens , the browser creates an event object , put details into it and passes it as an argument to the handler.
- event object property  : event.type , event.currentTarget
- elem.addEventListener("click ", (event)=> { console.log(event.type)})


## 5. ASYNCHRONOUS 
---
---
- **js is a synchronous , blocking , single-thereaded programming language.**
- **that means that instruction can run on after anotehr , and not in parallel.**
- **but we also can use asynchronous, non-blocking programming**

### asynchronous 
- asynchronous programming is an essntial concept in js that allows your code to run in the backgound without blocking the execution of other code
- callbacks , async/await and promises.
- setTimeout() ,setInterval(). 

### callback
### promise
### await/async


## 6. OOP
---
---
__proto__


## 7. ERROR-HANDLING
---
---

## 8. ADVANCE-JS
---
---
### eventloop
- The **event loop** is the secret behind JavaScript’s asynchronous programming.
- JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. 
- Let’s take a look at what happens on the back-end.
![[Pasted image 20230926194146.png]]


## Browser Storage
- Cookies, local storage, and session storage are the three methods that are most frequently used to save data locally on browsers.
![[Pasted image 20230926190934.png]]
1. **cookies**
2. **sessionStorage**
3. **local storage**
- storage event
### Caching
- Yes, caching is a way to store something in RAM , and use it
### IIFE


## fetchApi

## hoisting
### closures


[web devlopment](WEB_DEVLOPMENT)