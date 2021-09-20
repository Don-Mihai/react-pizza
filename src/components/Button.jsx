import React from 'react';
import classNames from 'classnames';

function Button({ className, href, children, outline, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      href={href}>
      {children}
    </button>
  );
}

export default Button;
