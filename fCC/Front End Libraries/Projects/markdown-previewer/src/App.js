import React, { Component } from "react";
import "./App.css";
import "./App.scss";
import { Button } from "react-bootstrap";

// import { Form } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        "# Header ## Sub-header \n[fCC](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) \n`inline code` \n``` code block ``` \n1. list item \n> Blockquote \n[img]:https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg \n**Bold text**",
      markdowned: "not yet markdowned",
    };
  }

  handleChange = (event) => {
    const marked = window.marked;
    this.setState({ value: event.target.value });
    this.setState({ markdowned: marked(event.target.value) });
    console.log(marked(event.target.value));
  };

  render() {
    return (
      <div className="App">
        <div className="MarkdownMachine">
          {/* prettier-ignore */}
          <textarea
            className="TextArea"
            name="editor"
            id="editor"
            cols="50"
            rows="20"
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            </textarea>
          <div id="preview" className="Preview">
            {this.state.markdowned}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
