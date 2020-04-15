import React, { createContext, useState } from "react";
import Alert from "@material-ui/lab/Alert";

export const AlertContext = createContext();

const AlertContextProvider = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  const success = (message) => {
    setType("success");
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const info = () => {
    setType("info");
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const warning = () => {
    setType("success");
    setMessage("warning");
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const error = (message) => {
    setType("error");
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <React.Fragment>
      {show ? (
        <Alert
          variant="filled"
          severity={type}
          style={{
            position: "fixed",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {message}
        </Alert>
      ) : (
        ""
      )}
      <AlertContext.Provider value={{ info, warning, error, success }}>
        {props.children}
      </AlertContext.Provider>
    </React.Fragment>
  );
};

export default AlertContextProvider;
