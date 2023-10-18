import React from "react";

export default function BotonLogin(props) {
    const { onClick } = props;

    return (
        <button className="BotonLogin" onClick={onClick}>
            <span>Login</span></button>
    );
}