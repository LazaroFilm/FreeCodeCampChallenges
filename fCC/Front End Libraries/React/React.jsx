ReactDOM.render(JSX, document.getElementById("root"));

const JSX = (
  <div>
    <h1>Hello</h1>
    <p>This is a paragraph</p>
    <ul>
      {/* comment */}
      <li>
        <a>one</a>
      </li>
      <li>
        <a>two</a>
      </li>
      <li>
        <a>three</a>
      </li>
    </ul>
    <br /> {/* line break */}
  </div>
);

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
}

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

const CurrentDate = (props) => {
  return (
    <div>
      {/* change code below this line */}
      <p>The current date is: </p>
      {/* change code above this line */}
    </div>
  );
};

// in the parent
<App>
  <Welcome user="Mark" />
</App>;

// in the child
const Welcome = (props) => <h1>Hello, {props.user}!</h1>;

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired };
