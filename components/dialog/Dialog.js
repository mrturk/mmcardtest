import { Dialog } from "@mui/material";

const MmCardSystemDialog = ({ open = true, handleClose, children }) => {
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%" } }}
      handleClose={handleClose}
      open={open}
    >
      {children}
    </Dialog>
  );
};

export default MmCardSystemDialog;
