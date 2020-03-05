import React from "react";

// function Counter() {
//   return <div>Hello</div>;
// }
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      name: "a",
      surName: ""
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSurName = e => {
    this.setState({ surName: e.target.value });
  };
  render() {
    return (
      <div className="max-w-6xl mx-auto">
        <input
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name=""
          id=""
          placeholder="Type ...."
        />
        <input
          value={this.state.surName}
          onChange={this.handleSurName}
          type="text"
          name=""
          id=""
          placeholder="Type ...."
        />
      </div>
    );
  }
}

export default Counter;
