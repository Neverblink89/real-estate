import React, { Component } from 'react'


class  Header extends Component {
  state={
    input:''
  }

  onChangeHandler = (event) => {
    this.setState({input:event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('header props', this.props)
    this.props.filterFunc(this.state.input)
  }


  render () {
    console.log('HEADER PROPS', this.props)
    return (
      <header>
      <div>
        <nav>
          <form onSubmit = {this.onSubmitHandler}>
            <input
              value={this.state.input}
              onChange = {this.onChangeHandler}
            ></input>
          <button></button>
        </form>
          <a href="#">Create Ads</a>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className="register-btn"><b>Register</b></a>
        </nav>
      </div>
    </header>
    )
  }
}
export default Header
