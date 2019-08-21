import React, { memo } from "react";
import PropTypes from "prop-types";
const Button = memo(({ active = false, className, ...rest }) => {
  return <button className={`${active} ? "active" : ""`} {...rest} />;
});
Button.Proptypes = {
  active: PropTypes.bool.isRequired
};

export default Button;
