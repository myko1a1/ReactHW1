import React, {FC} from 'react';
import {UserModels} from "../../models/UserModels";

const User:FC<UserModels> = (props) => {
    let {name,age,status} = props;
    return (
        <>
            {name} {age} {status}
        </>
    );
};

export default User;