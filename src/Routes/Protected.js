import React from "react";
import history from "../services/history";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
    
export default function Protected({children, isClosed, ...rest}){

    const isLoggedIn = useSelector(state => {
        return state.authreducer.isLoggedIn;
    })

    if(isClosed && !isLoggedIn){
        return (
            <>
                {history.push("/Login")}
                <Login></Login>
            </>
        );
    };

    return children
}

Protected.defaultProps = {
    isClosed: false
}

Protected.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool
}
