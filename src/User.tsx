import React, { useState, useEffect, Suspense } from 'react';

export const User = () => {

    const [name, setName] = useState(null);

    useEffect(() => {
        fetchRandomUser()
    }, []);

    async function fetchRandomUser() {
        try {
            setTimeout(async () => {
                const response = await fetch('https://ransdomuser.me/api/');
                const data = await response.json();
                const { name } = (data as any).results[0];
                setName(name.first);
            }, 4000);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Suspense fallback={<Error />}>
                <b>User: { name }</b>
            </Suspense>
        </>
    )

};

const Loading = () => {
    return (
        <span> Loading ... </span>
    )
};

const Error = () => {
    return (
        <span> Error!!! </span>
    )
};
