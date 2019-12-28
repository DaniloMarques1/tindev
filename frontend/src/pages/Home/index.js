import React from 'react';

export default function Home({ match }) {
    return (
        <h1>{match.params.id}</h1>
    )
}