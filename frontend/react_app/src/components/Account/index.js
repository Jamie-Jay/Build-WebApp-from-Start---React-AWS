import React from 'react';

class Account extends React.Component {
  render() {
    return (
    <form className="w-50 m-auto">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Full Name</label>
      <p>{this.props.location.state.username}</p>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <p>{this.props.location.state.useremail}</p>
    </div>
    <button className="btn btn-primary" disabled={true} >Change Password</button>
    </form>

    );
  }
}
// a user can reset or change a password. It is secured by authorization as well, so it is only reachable for authenticated users.
export default Account;
