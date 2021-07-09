import React from 'react';
const Button=({children, onClick})=>{
    return(
        <button type="button" onClick={onClick}>{children}</button>
    )
}
Button.defaultProps={
    onClick:()=>null,
    children:null,
}
export default Button;