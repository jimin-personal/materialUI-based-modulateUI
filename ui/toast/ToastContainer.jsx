import React from 'react';
import { ToastContainer as ReactToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToastContainerStyles } from './style';

const ToastContainer = () => {
  const toastClasses = useToastContainerStyles();
  return <ReactToastifyContainer toastClassName={toastClasses.container} />;
};

export default ToastContainer;
