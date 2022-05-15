import TextField from "@mui/material/TextField";

const MmCardSystemInput = ({ type, label, onChange }) => {
  return (
    <TextField
      onChange={onChange}
      id="standard-basic"
      type={type}
      label={label}
      variant="standard"
    />
  );
};

export default MmCardSystemInput;
