import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { contactSlice } from "../store/redusers/ContactSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
export const AddContactForm = () => {
  const dispatch = useAppDispatch();
  const { addContact } = contactSlice.actions;
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const addContactData = () => {
    const data = { Name: name, Phone: phone };
    dispatch(addContact(data));
  };
  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Contact Name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onClick={addContactData}>
          Add Contact
        </Button>
      </Grid>
    </Grid>
  );
};
