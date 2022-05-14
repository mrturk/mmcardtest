import { Stack } from "@mui/material";

const LoginLayout = ({ children }) => {
  return (
    <Stack
      bgcolor="grey"
      sx={{
        backgroundImage:
          'url("https://enbaca.com/web/assets/images/login-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      height="100vh"
      paddingX="50px"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Stack alignItems="center" maxWidth="400px" width="100%">
        {children}
      </Stack>
    </Stack>
  );
};

export default LoginLayout;
