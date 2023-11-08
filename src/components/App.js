{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from "react";
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(
          document.getElementById('root')
        );
const App = () =>{
    
    const element = <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>;
          
      
      root.render(element);
  }


// const App = () =>{
//     return(
//         <div id="main">
//             <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
//         </div>
//     )
// }

export default App;