import React, { Component } from "react";
import "./App.css";
import "./App.scss";
// import { Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        "# Header\n## Sub-header\n[fCC](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n`inline code`\n``` code block ```\n1. list item\n> Blockquote\n[img]:https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg\n**Bold text**",
      markdowned: (
        <div>
          <h1 id="header">Header</h1>
          <h2 id="sub-header">Sub-header</h2>
          <p>
            <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer">
              fCC
            </a>
            <br />
            <code>inline code</code>
            <br />
            <code>code block</code>
          </p>
          <ol>
            <li>
              list item
              <blockquote>
                <p>Blockquote </p>
              </blockquote>
            </li>
          </ol>
          <p>
            <strong>Bold text</strong>
          </p>
        </div>
      ),
    };
  }

  handleChange = (event) => {
    const marked = window.marked;
    const mkdned = {
      __html: window.marked(event.target.value, {
        breaks: true,
      }),
    };
    this.setState({ value: event.target.value });
    this.setState({
      markdowned: <div dangerouslySetInnerHTML={mkdned} />,
    });
    console.log(
      marked(event.target.value, {
        breaks: true,
      })
    );
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
