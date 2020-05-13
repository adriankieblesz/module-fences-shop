import React from 'react';
import "../SCSS/ErrorFormMessage.scss";
const ErrorFormMessage = ({ valid, message }) => <span className={`${valid ? "error-span  show-error" : "error-span"}`}>{message}</span>

export default ErrorFormMessage;