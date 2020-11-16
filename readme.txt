Javascript DOM

DOM is in the Client site,
only in browser

F12 to open console on Chrome

############################################################################################################

			Element Query and Selector

document object
	-provided by browser
	-contains the entire dom structure of the page
	-it is used to query elements on the page
	
1. DOM query method

document: document.getElementById('element-id')
	- id is an attrubute of element, and it is identical in the same page, you can not have two elements has the same id
	- document.getElementById('element-id'), it will return the dom object of that element
	- it will return a single dom object
	
document: document.getElementsByClassName("class-name")
	- class-name is an attribute of element, and it can be assigned to many elements
	- document.getElementsByClassName('class-name') will return a HTMLCollecton of elements
	- HTMLCollecton is similar to array, and you can access individual element by using the []
	- you need to use Array.from() to convert the HTMLCollecton to array


document: document.getElementsByTagName('tag-name')
	- tag-name is the tag type name of the elment, for example, h1, h2, li, ui, oi , body
	- document.getElementsByTagName('tag-name') will return a HTMLCollecton of elements
	- HTMLCollecton is similar to array, and you can access individual element by using the []
	- you need to use Array.from() to convert the HTMLCollecton to array
	
	
2. DOM query selectors
	- selectors: 
		- element-id is ("#element-id")
		- class-name is (".class-name")
		- tag-name is ("tag-name")
		- tag-name with attribute ("tag-name[attr='value']")
	- selectors can be cascade to target element:
		- for example:
			- ("#wrapper ul li .blue")
			
	- document.querySelector("selector"), it will return a single elemetn base on the selector, if the result is multiple, then it will return the first one
	
	- document.querySelectorAll("selector"), it will return a NodeList of elements, and you can use Array.from() to convert it to an array
	
	-** you can rewrite the document.querySelector and document.querySelectorAll to be the JQuery notation
	
			const $ = (selector) => {
				return document.querySelector(selector)
			}
			const $$ = (selector) => {
				return document.querySelectorAll(selector);
			}

	
############################################################################################################

	DOM Content structure (Element Node)
	
1. DOM elements text and html content and value

	- textContent: Only the text content of the element
		- you can get/set/append text of the element by using this property
		- use the element selecotr to get the element first, then:
			- element.textContent , get the text content of the element
			- element.textContent = "xxx", set the text content of the element
			- element.textContent += "xxx", append some other text to this element
			
	- innerHTML: The entire HTML content of the element
		- you can get/set/update the html content of the element by using this property
		- use the element selecotr to get the element first, then:
			- element.innerHTML , get the element's html content in string
			- element.innerHTML = "<html>", set the element's html content by using a string
			- element.innerHTML += "<html>", append a string html content to the element's html content
	- value: For <input> element, the value will retrive the value of the element box
		- you can get/set/update the value of <input> by using this property
		- inputElement.value, get the value of input element
		- inputElement.value = "xx", set value of the input element 
			
2. Nodes: DOM is made of nodes
	- Types of Nodes: https://www.w3schools.com/jsref/prop_node_nodetype.asp
		- Element Node
		- Comment Node
		- Attribute Node
		- Text Node
	- There are child Node, parent Node, and sibling Node.
	
	- methods: get a node by using selector
		- node.nodeType
		- node.nodeName
		- node.hasChildNodes()
		- node.cloneNode(true) //clone the node and all its child nodes
		- node.cloneNode(false) // only clone node itself
		
	- Traverse the DOM from parent to children or from children to parent
		- traverse element
			- element.parentElement //get the parent element of this element
			- element.children //get a HTMLCollecton of children elements of this element
		- traverse node
			- node.parentNode //get the parent node of this node
			- node.childElements //get a NodeList of all children nodes of this node
	- Traverse the DOM from siblding to sibling
		- traverse element
			- element.previousElementSibling // get the prevoius siblding element
			- element.nextElementSibling //get the next sibling element
		- traverse node
			- node.previousSibling // get previous sibling node
			- node.nextSibling // get the next sibling node
			
3. DOM: dynamically create/append/remove element 
	
	- create a new element:
		-document.createElement('tagName')
		- for example:
			let el_input = document.createElement('input')
			
	- append child element: append an child element to its parent element
		- get the parent element: parent_element
		- get the child element: child_element
		- append: parent_element.appendChild(child_element)
			
	- remove child element: remove a child element from parent element
		- get the parent element: parent_element
		- get the child element: child_element
		- remove: parent_element.removeChild(child_element)
			
			
4. DOM: dynamically update class, style, attribute, and get element id

	- style: element.style.xxx
		- get style: element.style.color
		- set style: element.style.color = "red"
	
	- class: element.classList
		- get all class in element:     element.classList
		- if class exists in element:   element.classList.contains("xxxx")
		- add class into element:       element.classList.add("xxxx")
		- remove class in element:      element.classList.remove("xxxx")
		
	- attribute: < attr-name="attr-value">
		- get attribute value by name:  element.getAttribute("attr-name")
		- check if attribute exist:     element.hasAttribute("attr-name")
		- add/set attribute:            element.setAttribute("attr-name", "attr-value")
		- remove attribute: 			element.removeAttribute("attr-name")
		
	- id: the id of the element
		- get the id of the element: element.id




############################################################################################################
	    DOM event :https://www.w3schools.com/jsref/dom_obj_event.asp
		
1. DOM events: [[Element trigger an event, and callback handle the event]]
	- To work with events, you need things
		- The element,which will trigger the event
		- The event, which will be triggered
		- The EventListener, which will be attached to the element and listen to event
		- The callback(event) function, which will be triggered when the element's EventListener catch the event from the element
		- for example:
		**
			element.addEventListener("event", (event)=>{
			})
			
			element add a event listener to listen to an event to trigger a callback 
			
		- event.preventDefault()
			this method is used to diable the default behavour of this event.
		
		
2. DOM events bubling
	- When an element trigger an event , the event will be passed from bottom element to the top elment as long as there is an EventListener to handle it 
	- Use case:
		it will be useful to add the EventListener on the upper level to catch the specific event from child elements
	
		
			const eul = document.querySelector("#book-list ul")

				eul.addEventListener("click", event => {
					let edel = event.target
					if (edel.className === 'delete') {
						let eli = edel.parentElement
						eul.removeChild(eli)
					}
				})
			
3. DOM form and submit event
		
	- Summary:
		- a short cut for get from in DOM is: document.forms['form-id'] ro document.forms[index]
		- button in form, default event is submit
		- <button type="button">, event is click
		- <button type= "submit">, event is submit
		- The default behavior for submit event is to refresh the page, so need to event.preventDefault() in the EventListener
	
	- Use case operation:
		-1) get the form element,
		-2) get the input element
		-3) addEventListener("submit",callback(event)) on form element
		-4) modify the callback, first line will be event.preventDefault()
		
4. event types so far: https://www.w3schools.com/jsref/dom_obj_event.asp
	- click
	- submit
	- change
	- keyup
	- input
	- DOMContentLoaded : the event will be triggered when DOM is fully loaded, you might need to use this one when you put the js file in the header
		document.addEventListener("DOMContentLoaded",
		event => {
			console.log('doc is loaded')
		})
		




























