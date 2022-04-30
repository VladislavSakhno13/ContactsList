import { Button, Grid, TextField } from "@mui/material";
import { AddContactForm } from "../Components/AddContactForm";
import { ContactsList } from "../Components/ContactsList";
export const HomePage = () => {
  return (
    <>
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <AddContactForm />
        </Grid>
        <Grid item xs={12}>
          <ContactsList />
        </Grid>
      </Grid>
    </>
  );
};
