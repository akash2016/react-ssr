import React from 'react';

const Home = () => (
    <div>
        <div>I am here in home component</div>
        <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
);

export default {
    component: Home
};