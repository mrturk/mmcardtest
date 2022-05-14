import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MmCardSystemInput from "../../components/formns/mmcardsysteminput";
import LoginLayout from "../../components/layout/LoginLayout";
import { adminLogin } from "../../src/fetchers/admin";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <Stack
      bgcolor="white"
      width="100%"
      paddingX="10px"
      paddingY="50px"
      borderRadius="5px"
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        opacity: 0.8,
      }}
      spacing={3}
    >
      <Stack>
        <Typography color="#006cff" textAlign="center" variant="h5">
          Admin Girişi
        </Typography>
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          label="Kullanıcı Adı"
        />
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          label="Şifre"
        />
      </Stack>
      <Stack>
        <Button
          disabled={loading || !username || !password}
          onClick={async () => {
            try {
              setLoading(true);
              const response = await adminLogin({
                username: username,
                password: password,
              });
              console.log(response);
              sessionStorage.setItem("auth", JSON.stringify(response));
              router.push("/admin/home");
            } catch (error) {
              sessionStorage.setItem("auth", null);
              console.error(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          GİRİŞ
        </Button>
      </Stack>
    </Stack>
  );
};

const AdminLogin = () => {
  return (
    <LoginLayout>
      <Page />
    </LoginLayout>
  );
};

export default AdminLogin;
