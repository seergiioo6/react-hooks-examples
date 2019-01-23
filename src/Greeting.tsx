import React, { useState, useEffect } from 'react';

export const Greeting = () => {
    const name = useFormInput("Sergio");
    const surname = useFormInput("Andres Ruiz");
    const width = useWindowWidth();
    useDocumentTitle(name.value + ' ' + surname.value);

    return (
        <>
            <section>
                <div>
                    <input
                        type="text"
                        {...name}
                    />
                </div>
                <br/>
                <div>
                    <input
                        type="text"
                        {...surname}
                    />
                </div>
                <br/>
                <div>
                    <input
                        type="text"
                        value={width}
                    />
                </div>
            </section>
        </>
    )
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return width;
};

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    })
};

const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: any) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
};
