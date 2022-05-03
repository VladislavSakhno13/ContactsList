import { Button, Grid, TextField } from "@mui/material";
import { AddContactForm } from "../Components/Inputs/AddContactForm";
import { ContactsList } from "../Components/ContactsList";
import { TopBar } from "../Components/AppBar";
export const HomePage = () => {
  return (
    <>
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={12} style={{ margin: "30px" }}>
          <AddContactForm />
        </Grid>
        <Grid item xs={12}>
          <ContactsList />
        </Grid>
      </Grid>
    </>
  );
};
