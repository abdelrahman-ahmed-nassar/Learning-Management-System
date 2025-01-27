import React from "react";

export default function Year({params}) {
    const { yearId } = React.use(params);
    return (
        <h1>{yearId}</h1>
    );
}