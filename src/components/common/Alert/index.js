import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../../context/alert/alertContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertComponent = () => {
  const { alert } = useContext(AlertContext);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { open, vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState((prevState) => ({ ...prevState, open: false }));
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, open: true }));
  }, [alert]);

  return (
    <>
      {alert &&
        alert?.length &&
        alert?.map((d, idx) =>
          d?.msg && typeof d?.msg === "string" ? (
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              key={idx}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={d?.type}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {d?.msg ?? ""}
              </Alert>
            </Snackbar>
          ) : (
            d?.msg?.map((message, idx2) => (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={idx2}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity={d?.type}
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  {message?.msg ?? ""}
                </Alert>
              </Snackbar>
            ))
          )
        )}
    </>
  );
};

export default AlertComponent;
