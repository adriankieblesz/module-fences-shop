import React from 'react';
import "../SCSS/ErrorFormMessage.scss";
const ErrorFormMessage = ({ valid, message }) => <span className={`${valid ? "error-span" : "error-span show-error"}`}>{message}</span>

export default ErrorFormMessage;