import React from "react";
import "./App.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.min.js";

function App() {
  return (
    <div className="App">
      <p>What? </p>
      <textarea name="editor" id="editor" cols="50" rows="20">
        # Header ## Sub-header
        [fCC](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
        `inline code` ``` code block ``` 1. list item > Blockquote [img]:
        https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg
        **Bold text**
      </textarea>
      <p id="preview">PREVIEW</p>
    </div>
  );
}

export default App;
