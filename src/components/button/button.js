import React from 'react';


// styles

import { Wrapper } from './button-style';

const Button = ({ text, callback }) => (
    <Wrapper type ="button" onClick={callback}>
        {text}
    </Wrapper>

);

export default Button;