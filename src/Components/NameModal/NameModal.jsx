
import React, { useState, useContext } from 'react';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/features/auth/authSlice';


const NameModal = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.auth.userName);

    const handleLogin = (name) => {
        //console.log(name);
        dispatch(login(name));
    };


    return (
        <div className="modal">
            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <Button size="xsm" onClick={() => handleLogin(name)}>Submit</Button>
        </div>
    );
};

export default NameModal;
