import React from "react";
import Proptypes from "prop-types";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  constructor() {
    super(); // must have this
    // console.log("gone create a component")
    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();
  static propTypes = {
    history: Proptypes.object
  };
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    // const storeName = $('input') // not use this
    // use 'ref' attribute in html

    // console.log(this.myInput); // not accessible
    // console.log(this.myInput.value.value);
    const storeName = this.myInput.value.value;
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  // Run as component did mount
  // componentDidMount() {
  //   console.log('mounted!')
  //   console.log(this); // return StorePicker
  // }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}
export default StorePicker;
