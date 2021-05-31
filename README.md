# PORTFOLIO react
---
## List of things i learnt on this project: 
---  
* ## npx create-react-app appname   
will create a react application with all its sub modules
* ## Components & Modules   
like in Vanilla J.S you can break your code into files with modules, but in react you use components.   

This allows you to use __JSX__, a form of html for javascript making things like the querySelector useless since you can use __dynamic Values__ and __onClick__ Events in it's place.

To use a component you have to make a file.js eg: header.js/main.js/section.js . inside said file use the __sfc__ shortcut (__StatelessFunctionalComponent__) to create a function that then exports the files to the __App.js__ which gets rendered by the __Index.js__ inside the HTML.   

* ## useState hook 
Honestly this one gave me a little trouble.   
So to use a useState hook you first import it like this   
`import {useState} from "react"`

This feature is used to update variables using the deconstructor method like so   
`let [age,setAge] = useState(23)`

`function ChangeAge(){   
  setAge("25")   
}`

`<button onClick={changeAge}`

This will update any dynamic Value used.

* ## React Dev Tools   
This allows you to see components with needing to console log your info ... may need to look more into this :) 