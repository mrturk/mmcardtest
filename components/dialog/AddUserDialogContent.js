import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { addUser } from "../../src/fetchers/admin";
import MmCardSystemInput from "../formns/mmcardsysteminput";

const AddUserDialogContent = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Stack padding="20px" spacing={3}>
      <Stack>
        <Typography textAlign="center" variant="h5">
          Yeni Kullanıcı Kaydı
        </Typography>
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          label="AD"
        />
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          label="SOYAD"
        />
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
          type="text"
          label="Şifre"
        />
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          label="Telefon"
        />
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setWorkPhone(e.target.value);
          }}
          type="text"
          label="İş Telefonu"
        />
      </Stack>
      <Stack>
        <MmCardSystemInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          label="Email"
        />
      </Stack>

      <Stack>
        <Button
          sx={{ color: "black" }}
          onClick={async () => {
            const form_data = new FormData();
            const auth = JSON.parse(sessionStorage.getItem("auth"));

            form_data.append("adminUsername", auth.username);
            form_data.append("adminPassword", auth.password);
            form_data.append("FirstName", name);
            form_data.append("LastName", lastname);
            form_data.append("Age", 20);
            form_data.append("UserName", username);
            form_data.append("Password", password);
            form_data.append("Gender", "none");
            form_data.append("Phone", phone);
            form_data.append("BussinesPhone", workPhone);
            form_data.append("Email", email);
            form_data.append("Active", true);
            try {
              const response = await addUser(form_data);
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          GİRİŞ
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddUserDialogContent;
