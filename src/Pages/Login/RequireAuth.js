import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../../config/authConfig';

const RequireAuth = ({ children }) => {

    const location = useLocation();

    //this loading is for handel special case
    // if (loading) {
    //     return <Loading></Loading>
    // }

    // if (auth.token == 'Please login') {
    //     return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    // }


    return children;
};

export default RequireAuth;