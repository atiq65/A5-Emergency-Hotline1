1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
*getElementById(idName)
-Selects a specific element by id
-Since id is unique
-It returns one element

*getElementsByClassName('className')
-Selects all elements with the given class name
-It returns an [HTMLCollection]

*querySelector('selector')
-Like CSS selector to select elements
-This provide first matching element

*querySelectorAll('selector')
-Uses CSS selector to select all matching elements
-retunr nodeList


2.How do you create and insert a new element into the DOM?
*Create a new element
-let newP = document.createElement('p')

*Add content to the element
-newP.innerText = 'Programming Hero'

*Insert the element into the DOM
-document.section.appendChild(newP)


3.What is Event Bubbling and how does it work?
-Event Bubbling happens when an event (like click,mousehover etc)is triggered on an element
-Event first runs on the target element
-Then moves upwords throught is parent to grandparent to document


4.What is Event Delegation in JavaScript? Why is it useful?
-Event Delegation is when you attach an event listener to a parent element
-That handles events on its child element


5.What is the difference between preventDefault() and stopPropagation() methods?
*PreventDefailt()
-Prevents the default behavior of an element 

*stopPropagation()
-Stops the event from bubbling uo to parent element
