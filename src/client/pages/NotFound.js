import React from 'react';

const NotFound = ({staticContext = {}}) =>{
    staticContext.notExist = true;
    return <h1>Not found</h1>
};

export default {
    component:NotFound
};