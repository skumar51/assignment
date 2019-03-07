import React from 'react';
import { connect } from 'react-redux';
import '../css/style.css'


class SubmittedInfo extends React.Component {
  render() {
    return (
      <div className="submittedInfo">
        <h2>Submitted Data</h2>
       <table className="tableList">
          {this.props.submittedInfo.map((info, index) => (
            <tbody key={index} >
             <tr>
            <td>First Name :</td>
            <td>{info.name}</td>
            </tr>
            <tr>
            <td>Last Name : </td>
                <td>{info.surName}</td>
            </tr>
            <tr>
            <td>Email :</td>
                <td>{info.email}</td>
            </tr>
            <tr>
            <td>Gender :</td>
                <td>{info.sex}</td>
            </tr>
            <tr>   
            <td>Occupation :</td>
                <td>{info.favoriteOccupation}</td>
            </tr>
            <tr>
            <td>Password :</td>
                <td>{info.password}</td>
            </tr>
            <tr>
            <td>Confirm Password :</td>
                <td>{info.cPassword}</td>
            </tr>
            <tr>
            <td>Address : </td>
                <td>{info.address}</td>
            </tr>
            </tbody>   
          ))}
          <br/>
          <br/>
        <hr/>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    submittedInfo: state.submittedInfo
  };
};

export default connect(mapStateToProps)(SubmittedInfo);
