import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {
    const styleP = {width: "200px", height: "200px" }
    return (
        <div>
            {props.alertName(props.FullName)}
            <p>Fullname : {props.FullName}</p>
            <p>Age : {props.Age}</p>
            <p>Biography : {props.Biography} </p>
            <p>Profession : {props.Profession} </p>
            <img style={styleP} src={props.children} />
        </div>
    )
}

Profile.defaultProps = {
    FullName : "Test",
    Biography : "Test",
    Profession : "Test"
}

Profile.propTypes= {
    FullName : PropTypes.string,
    Age : PropTypes.number,
    Biography : PropTypes.string,
    Profession : PropTypes.string
}

export default Profile
