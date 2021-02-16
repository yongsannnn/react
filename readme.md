Start the repo with

```
npx create-react-app foldername
```

Once folder setup is done
```
cd foldername
npm start
```
Using React.Fragment, replaces <div> after transpilation will not show on html. 
```
import React from "react"; 
```

In order to get image, must place within src folder and use the following
```
<img src = {require("./img.jpg").default}/>
```
Alternatively, importing the image using import/from
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


For Dynamic Image files using Component
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