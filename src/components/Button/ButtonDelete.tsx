import React from 'react';

interface ButtonDeleteProps {
  del: React.MouseEventHandler<HTMLButtonElement>,
}
const ButtonDelete: React.FC<ButtonDeleteProps> = (props) => {
  return (
    <button onClick={props.del}>Delete</button>
  );
};

export default ButtonDelete;