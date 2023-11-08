{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from "react";
import ReactDOM from "react-dom";

const App = () =>{
    return(
        <div id="main">
            const element = <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>;
        </div>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  root.render(element);

export default App;