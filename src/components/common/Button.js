import React from 'react';
import './common.scss';

const Button = (props: Props) => {
  const setButtonClass = props.customClass || "btn";
  return (
    <div type="button" className={setButtonClass} onClick={props.handleOnClick}>
      {props.text}
    </div>
  )
}

Button.defaultProps = {
  customClass: "btn",
}

export default Button;
