import React, { useState, useEffect, Suspense } from 'react';

export const User = () => {

    const [name, setName] = useState(null);

    useEffect(() => {
        fetchRandomUser()
    }, []);

    async function fetchRandomUser() {
        try {
            const response = await fetch('https://ransdomuser.me/api/');
            const data = await response.json();
            const { name } = (data as any).results[0];
            setName(name.first);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <b>User: { name }</b>
        </>
    )

};
