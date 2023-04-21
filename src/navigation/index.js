import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import UserStack from './userStack';
import AuthStack from './authStack';

export default function RootNavigation() {
    const [user, setUser] = useState();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user", JSON.stringify(user));
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return user ? <UserStack /> : <AuthStack />;
}