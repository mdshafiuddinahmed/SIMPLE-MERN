import React from 'react';

import UsersList from '../components/UsersList';

const Users = ()=> {
    const USERS = [
        {
            id:'u1',
            name:'Shafi13',
            image:
            'https://bookingagentinfo.com/wp-content/uploads/2022/06/Alex-Costa-Contact-Information.jpg',
            places: 3
        }
    ];
    return<UsersList items ={USERS}/>
};

export default Users;