import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../../context/alert/alertContext";
import Snackbar from "@mui/material/Snackbar";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState((prevState) => ({ ...prevState, open: false }));
  };

  const handleClick = () => () => {
    setState((prevState) => ({ ...prevState, open: true }));
  };

  useEffect(() => {
    console.log("first");
    setState((prevState) => ({ ...prevState, open: true }));
  }, [alert]);

  return (
    <>
      {/* {alert &&
        alert?.length &&
        alert?.map((d) => (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={d?.msg ?? ""}
          />
        ))} */}

      {alert?.msg && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={alert?.msg ?? ""}
        />
      )}
    </>
  );
};

export default Alert;
