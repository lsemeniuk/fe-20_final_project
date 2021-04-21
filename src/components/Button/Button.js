import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ variant, title, onClick, disabled }) => {
  return (<>
    <button className="button" style={styles} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  </>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
