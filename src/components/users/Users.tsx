import React from 'react';
import {users} from "../../data";
import {UserModels} from "../../models/UserModels";
import User from "../user/user";

const Users = () => {
    return (
        <ul>
            {
                users.map(({name, age, status}:UserModels) => <li><User name={name} age={age} status={status}/></li>)
            }
        </ul>
    );
};

export default Users;