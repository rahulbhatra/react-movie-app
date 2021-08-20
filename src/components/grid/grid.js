import React from 'react';

//styles
import { Wrapper, Content } from './grid-style';


const Grid = ({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;