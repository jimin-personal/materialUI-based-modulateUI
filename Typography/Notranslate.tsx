import React from 'react';

export interface NotranslateProps {
  id?: string;
  component?: any;
  className?: string;
  children?: React.ReactNode;
}

const Notranslate: React.FC<NotranslateProps> = ({ component, className, children, ...rest }) => {
  const Tag = component ? component : 'span';
  return (
    <Tag className={`notranslate ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Notranslate;
