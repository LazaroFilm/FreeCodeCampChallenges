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
  }
  render() {
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
    <Welcome user="Mark" />{" "}
    {/* returns: Hello, Mark, put curls if JS even if number*/}
  </App>
);

//setting default for a props
MyComponent.defaultProps = { location: "San Francisco" };

//check the props type (func, bool, array, undefined, number, string, binint)
//needs to be imported since React v15.5.0
import PropTypes from "prop-types";
MyComponent.propTypes = { user: PropTypes.string.isRequired };
