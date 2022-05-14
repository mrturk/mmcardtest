import {
  ContactPhone,
  Instagram,
  Language,
  WhatsApp,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Stack width="100%" flexDirection="row">
        <Stack justifyContent="center" alignItems="center" width={"100%"}>
          <IconButton
            onClick={() => {
              window.open(
                "https://wa.me/905052722424?text=bu benim whatsapp hesabım",
                "_blank"
              );
            }}
            sx={{ width: "100%", maxWidth: "400px", height: "400px" }}
          >
            <WhatsApp sx={{ fontSize: "200px" }} />
          </IconButton>
        </Stack>
        <Stack justifyContent="center" alignItems="center" width={"100%"}>
          <IconButton
            sx={{ width: "100%", maxWidth: "400px", height: "400px" }}
          >
            <Instagram
              onClick={() => {
                window.open("https://www.instagram.com/parle.jpg/", "_blank");
              }}
              sx={{ fontSize: "200px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Stack width="100%" flexDirection="row">
        <Stack justifyContent="center" alignItems="center" width={"100%"}>
          <IconButton
            onClick={() => {
              window.open("https://mmcard.online/", "_blank");
            }}
            sx={{ width: "100%", maxWidth: "400px", height: "400px" }}
          >
            <Language sx={{ fontSize: "200px" }} />
          </IconButton>
        </Stack>
        <Stack justifyContent="center" alignItems="center" width={"100%"}>
          <IconButton
            sx={{ width: "100%", maxWidth: "400px", height: "400px" }}
          >
            <ContactPhone
              onClick={() => {
                window.open(
                  "http://api.mmcardsystem.online/userfiles/test.vcf"
                );
              }}
              sx={{ fontSize: "200px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
