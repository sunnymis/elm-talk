// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";
/*
  1. Elm. Logo
  2. Why Elm? zero runtime errors, simplified debugging, easy refactor, testing is easy, more productive
  3. Functional programming. Emphases the use of pure functions, higher order functions, and immutable data
  4. pure function. CodeSlide with examples. Add function, mapping example (mapping inputs to retrun values)
    non pure function: http calls, function that needs to be called without using its return value, math.random()
    var count = 0;
    function increaseCount(val) {
        count += val;
    }
  5. pure functions in elm
  6. Higher order functions. Set variable equal to function, functions can get arguments in another function, return functions from a function
   show JS and Elm
  7. Immutable data. Show elm { model | person = 'sunny'; } modifications
  8. Goal of functional programming: Elminate state as much as possible and control it when needed. 
  9. Elm Architecture


 */

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  elm: require("../assets/elm-logo.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        
        <Slide transition={["zoom"]} bgColor="primary">
         <Heading size={1} lineHeight={1} textColor="secondary">
           Elm
         </Heading>
         <Image src={images.elm} style={{height: '300px'}} /> 
       </Slide>

       <Slide transition={["slide"]}>
        <Heading size={1} fit lineHeight={1}>Why Elm?</Heading>
         <List textColor="black">
           <ListItem>Zero Runtime Errors</ListItem>
           <ListItem>Simplified Debugging</ListItem>
           <ListItem>Easy Refactoring</ListItem>
           <ListItem>Static Type System</ListItem>
           <ListItem>Testing is simple</ListItem>
           <ListItem>More Productive</ListItem>
         </List>
       </Slide>

       <Slide transition={["slide"]}>
         <Heading size={1} caps lineHeight={1}>
           Functional Programming
         </Heading>
         <List>
           <ListItem>Pure Functions</ListItem>
           <ListItem>Higher Order Functions</ListItem>
           <ListItem>Immutable Data</ListItem>
         </List>
       </Slide>

       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/0.example")}
         textSize={'1.4rem'}
         ranges={[
           { loc: [0, 1], title: 'Pure Functions in JavaScript' },
           { loc: [1, 4] },
           { loc: [5, 10] },
           { loc: [11, 16] },
           { loc: [17, 21], title: 'Impure Functions in JavaScript' },
           { loc: [22, 25] },
           { loc: [26, 41] }
         ]} />

       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/1.example")}
         textSize={'1.4rem'}
         ranges={[
           { loc: [0, 1], title: 'Pure Functions in Elm' },
           { loc: [1, 3] },
           { loc: [4, 6] },
           { loc: [7, 12] }
         ]} />

       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/2.example")}
         textSize={'1.4rem'}
         ranges={[
           { loc: [0, 1], title: 'Higher Order Functions in JavaScript' },
           { loc: [1, 4] },
           { loc: [5, 9] },
           { loc: [10, 15] },
           { loc: [17, 22], title: 'Higher Order Functions in Elm' },
           { loc: [23, 26] },
           { loc: [27, 29] },
           { loc: [30, 32] },
           { loc: [33, 34] },
           { loc: [35, 38] },
           { loc: [23, 24] },

         ]} />

       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/3.example")}
         textSize={'1.4rem'}
         ranges={[
           { loc: [0, 5], title: 'Immutable Data' },
           { loc: [6, 7] },
         ]} />

        <Slide transition={["slide"]}>
          <Heading size={1} lineHeight={1}>
            Goal of Functional Programming
          </Heading>
          <List>
            <ListItem>Elminate state as much as possible and control it when needed.</ListItem>
          </List>
        </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
