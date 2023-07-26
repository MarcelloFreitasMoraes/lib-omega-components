import React from 'react';

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = props => {
  return <div>{props.children}</div>;
};

export default Row;
