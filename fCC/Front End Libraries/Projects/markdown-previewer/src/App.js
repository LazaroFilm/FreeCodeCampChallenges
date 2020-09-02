import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }
  render() {
    return (
      <div className="App">
        <p>
          Hello! <span variant="secondary">New</span>
        </p>
        <div className="MarkdownMachine">
          {/* prettier-ignore */}
          <textarea
            className="TextArea"
            name="editor"
            id="editor"
            cols="50"
            rows="20"
          >
            # Header ## Sub-header \n
            [fCC](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) \n
            `inline code` \n
            ``` code block ```` \n
            1. list item
            &gt; Blockquote
            [img]:https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg
            **Bold text**
          </textarea>
          <p className="Preview">PREVIEW</p>
        </div>
      </div>
    );
  }
}

export default App;
