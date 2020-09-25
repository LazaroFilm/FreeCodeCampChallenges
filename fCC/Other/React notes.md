# React Notes

JSX comment: `{/*This is a React Comment!*/}`

---

In JSX, you can use (parentheses) around the HTML code if you want

```JSX
const JSX = (
  <div className="name">
    <ul>
      <li></li>
    </ul>
  </div>
);
```

```JSX
ReactDOM.render(jsxElement, document.getElementById("HTMLid"));
ReactDOM.render(<ReactComponent />, document.getElementById("HTMLid"));
```

within JSX, use className= "name" instead of class
and we use camelCase for onClick and onChange.

alway have a single element in REACT, usually `<div />` or `<span />` enclosing all the rest.

---

Stateless functional component:

```JSX
const MyComponent = function () {
  render(<div>Text here.</div>);
};
```

(child) functional component only has a return, no render (can be implicit too):

```JSX
const ChildComponent = () => {
  return (
    <div>
      <p>I am a child.</p>
    </div>
  );
};
```

- Using an arrow function allows you to not have to `bind()` it.​ :thumbsup: but they have some compatibility issues (:rage: IE) and other issues :warning:

---

## React component

```JSX
class MyOtherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp", //state, call with {this.state.name}
    };
  }
  render() {
    const name = this.state.name; //prop, call with {name}
    function newFunction(something) {
      return `This is: ${something}`;
    }
    return (
      <div>
        <p>Text here.</p>
        <ChildComponent />
        {/* You can put child components inside the main component */}
      </div>
    );
  }
}
```

---

calling a child function inside JSX.

```JSX
const Welcome = (props) => <h1>Hello, {props.user}!</h1>;
const otherJSX = (
  <App>
    <Welcome user="Mark" /> {/* this is a prop */}
    {/* returns: Hello, Mark, put curls if JS even if number*/}
  </App>
);
```

this works with SFC (stateless functional component)

---

setting default for a props:

```JSX
MyComponent.defaultProps = { location: "San Francisco" };
```

```JSX
import PropTypes from "prop-types";
MyComponent.propTypes = { user: PropTypes.string.isRequired };
```

check the props type (func, bool, array, undefined, number, string, binint) needs to be imported since React v15.5.0

## State

to update the state under super.

```JSX
doThis() {
  this.setState({key: newValue})
 };

handleChange = (event) => {
  this.setState({
    input: event.target.value
  });
}

<button onClick={this.doThis}>Click Me!</button>
<input value={this.state.input} onChange={this.handleChange} />
<form onSubmit={this.doThis}><button type='submit'>Submit</button></form>
```

---

To update the state use this:

```JSX
this.setState((state, props) => ({
  counter: this.state.counter + props.increment,
}));
this.setState((state) => ({
  counter: this.state.counter + 1,
}));
```

---

put that in the `constructor`, under `super` to access it:

```JSX
this.handleClick = this.handleClick.bind(this);
```

or use an arrow function (fuck IE)

Lifecycle hooks

```JSX
componentWillMount();
componentDidMount();
shouldComponentUpdate();
componentDidUpdate();
componentWillUnmount();
```

```JSX
setTimeout(() => {
  this.state({
    activeUsers: 1273,
  });
});
```

## Inline styling with JSX

```JSX
<div style={{ color: "yellow", fontSize: 16 }}>Mellow Yellow</div>
```

camelCase used instead of kebab-case and double `{{}}`

---

```JSX
{condition && <p>markup</p>}
```

if condition `true`, markup will display in DOM.

---

You can use `if/else` in the `render()` method, before `return(`.

---

You can use ternary operator right in `retrun`.

```jsx
cond ? doThis : doThat;
```

---

You can use Map to create a JSX item per attribute in an array like this? 

```jsx
const items = this.state.toDoList.map(x => <li>{x}</li>)
```

You can also user `array.filter()` to select the attributes you want to show in your `array.map()` 

## Render on the Server

You can render the first page on the server so you get a HTML page that loads faster at first with your website;s structure ready. Then you load your React components into it. 

```jsx
ReactDOMServer.renderToString(<App/>)
```

## Start a React project

In terminal to setup. In your project folder,

- initialize `npm init`

-  create react app `npx create-react-app my-app` 

Snippet `rcc` + <kbd>tab </kbd> create a Class Component Skeleton

***

`event.preventDefault()` stops the page from reloading after submitting to DB. ??? look more into this. 

---

# React Example

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);

  };

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map(message => <li>{message}</li>)}
        </ul>
      </div>
    );
  }
};

```



`Super(props)` is deprecated, instead use this: 

```jsx
class DisplayMessages extends React.Component {
  state = {
      input: '',
      messages: []
    }
```

