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

---

## React component

```JSX
class MyOtherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp", //call {this.state.name}
    };
  }
  render() {
    const name = this.state.name; //call {name}
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

<button onClick={this.doThis}>Click Me!</button>
<input value={this.thing} onChange={this.doThis} />
<form onSubmit={this.doThis}><button type='submit'>Submit</button></form>
```

---

To update the state use this:

```JSX
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
this.setState((state) => ({
  counter: state.counter + 1,
}));
```

---

put that in the `constructor`, under `super`:

```JSX
this.handleClick = this.handleClick.bind(this);
```

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

---

Inline styling JSX:

```JSX
<div style={{ color: "yellow", fontSize: 16 }}>Mellow Yellow</div>
```

camelCase used instead of kebab-case and double `{{}}`

```JSX
{condition && <p>markup</p>}
```

if condition `true`, markup will display in DOM.