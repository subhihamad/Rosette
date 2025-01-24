import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { userInfo } from "../context/ContextProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const { setSaveData } = userInfo();
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleDisAgree = () => {
    setOpen(false);
    setSaveData(false);
  };

  
  const handleAgree = () => {
    setOpen(false);
    setSaveData(true);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: "25px", fontFamily: "cursive" }}
            id="alert-dialog-slide-description"
          >
            Do you Want to save your data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisAgree}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
