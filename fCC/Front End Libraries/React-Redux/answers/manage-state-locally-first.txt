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
