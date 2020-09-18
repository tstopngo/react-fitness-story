import React, {Component} from 'react';


class Home extends Component {

  state = {
    text: " "
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return(
      <div className="mascot-image">
        <img src="https://66.media.tumblr.com/0e4dde110299709cf47a54f8446f4f4d/tumblr_p2qf1jKHnW1wlell4o1_400.png" alt='fitness-potato'/>
        <h1>About</h1>
        <form>
          <input type="text" onChange={this.handleOnChange} />
        </form>
        <p>{this.state.text}</p>
      </div>
    )
  }
}


export default Home;
