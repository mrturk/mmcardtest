import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AddUserDialogContent from "../../../components/dialog/AddUserDialogContent";
import MmCardSystemDialog from "../../../components/dialog/Dialog";

const AdminHome = () => {
  const router = useRouter();
  useEffect(() => {
    // try {
    //   if (!JSON.parse(sessionStorage.getItem("auth"))) {
    //     router.push("/admin");
    //   }
    // } catch (error) {
    //   router.push("/admin");
    // }
  }, [router]);
  return (
    <Stack>
      <MmCardSystemDialog>
        <AddUserDialogContent />
      </MmCardSystemDialog>
    </Stack>
  );
};

export default AdminHome;
