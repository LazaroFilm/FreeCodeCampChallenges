{
  /*This is a React comment!*/
}

const JSX = (
  <div className="name">
    <ul>
      <li></li>
    </ul>
  </div>
);
// You can use (parentheses) around the HTML code if you want

ReactDOM.render(JSXelement, document.getElementById("HTMLid"));
ReactDOM.render(<ReactComponent />, document.getElementById("HTMLid"));

{
  /* within JSX, use className= "name" instead of class
and we use camelCase for onClick and onChange */
}

// alway have a single element in REACT, usually <div /> or <span /> enclosing all the rest.
//Stateless functional component
const MyComponent = function () {
  render(<div>Text here.</div>);
};

//(child) functional component only has a return, no render (can be implicit too).
const ChildComponent = () => {
  return (
    <div>
      <p>I am a child.</p>
    </div>
  );
};

//React component
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

//calling a child function inside JSX.
const Welcome = (props) => <h1>Hello, {props.user}!</h1>;
//this works with SFC (stateless functional component)
const otherJSX = (
  <App>
    <Welcome user="Mark" /> {/* this is a prop */}
    {/* returns: Hello, Mark, put curls if JS even if number*/}
  </App>
);

//setting default for a props
MyComponent.defaultProps = { location: "San Francisco" };

//check the props type (func, bool, array, undefined, number, string, binint)
//needs to be imported since React v15.5.0
import PropTypes from "prop-types";
MyComponent.propTypes = { user: PropTypes.string.isRequired };


// STATE //
doThis() {
  this.setState({key: newValue}) //to update the state under super.
 };

<button onClick={this.doThis}>Click Me!</button> 
<input value={this.thing} onChange={this.doThis} />
<form onSubmit={this.doThis}><button type='submit'>Submit</button></form>


//to update the state use this: 
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
this.setState(state => ({
  counter: state.counter + 1
}));

this.handleClick = this.handleClick.bind(this) //put that in the constructor, under super.

// LIFE HOOKS //
componentWillMount()
componentDidMount()
shouldComponentUpdate()
componentDidUpdate()
componentWillUnmount()

setTimeout( () => {
  this.state({
    activeUsers: 1273
  })
})

//inline styling JSX
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
//camelCase used instead of kebab-case and double {{}}

{condition && <p>markup</p>} // if condition true, markup will display in DOM.