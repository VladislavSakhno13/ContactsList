import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { contactSlice } from "../../store/redusers/ContactSlice";
import MuiPhoneNumber from "material-ui-phone-number";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
export const AddContactForm = () => {
  const dispatch = useAppDispatch();
  const { addContact } = contactSlice.actions;
  const [phone, setPhone] = useState<
    string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  >();
  const [name, setName] = useState<string>("");
  const addContactData = () => {
    const data = { name: name, phone: phone };
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
        <MuiPhoneNumber
          defaultCountry={"us"}
          onChange={(event) => {
            setPhone(event);
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
