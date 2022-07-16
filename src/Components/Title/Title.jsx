import { createElement } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const Title = ({ type = 'h1', text = '', className, children }) =>
  createElement(type, { className: cn('title', className) }, children ?? text);

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  text: PropTypes.string,
  children: PropTypes.string,
};
