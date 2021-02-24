Start the repo with

```
npx create-react-app foldername
```

Once folder setup is done
```
cd foldername
npm start
```

To copy a folder using linix
```
cp -r foldertocopy namefornewfolder
```
Using React.Fragment, replaces <div> after transpilation will not show on html. 
```
import React from "react"; 
```

In order to get image, must place within src folder and use the following
```
<img src = {require("./img.jpg").default}/>
```
Alternatively, importing the image using import/from.
This method will omit the require.() and .default
```
import cafeInterior from "./cafe-interior.jpg";

<img src = {cafeInterior}/>
```

CSS manupilation
1) Using a css file and import to your react file
2) Use inline css take note of the {{}}, first one to indicate we are going to use JS, second one is to hold the objects of the changes
``` 
<p style={{
    fontFamily: "Verdana",
    fontSize: "24px",
    color : red;
}}>Insert Sample Text</p>
``` 


For Dynamic Image files using Component.
Take note when calling the function, attribute should contain require and default. 
```
function BorderedImageFrame(props) {
    return (
        <img src={props.imgLink} style={{
            border: "4px solid red"
        }} />
    )
}

<BorderedImageFrame imgLink= {require("./res.jpg").default}/>
```

Alternatively,
import img and declare a variable for it, call the variable in the src
```
import resImg from "./res.jpg"
<img src={resImg}></img>
```

CLASS-based component  
1. a class is a container that can contain variables and functions
2. a class can be cloned. It's like a prototype/boiler plate. The clone is known as instances. 
3. a class is like a definition of an entity
4. an instance of a class is a specific example of that entity
Calling a class NumberBox, everything in React.Component is copied into NumberBox.
NumberBox is now an extension of React.Component.
```
class NumberBox extends React.Component {
    render(){
        return()
    }
}
```

#STATE
It is a special keyword. When state changes the function will withdraw. 
```
class NumberBox extends React.Component {
    state = {
        "count":10,
    }
    render(){
        return()
    }
}
```