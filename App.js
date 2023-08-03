import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent =  <h1 id="heading">😊😊😊😊😊</h1>;

const HeadingComponent = () => (

    <div>
        {TitleComponent}
        <h1>🚀🚀🚀🚀🚀🚀</h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
