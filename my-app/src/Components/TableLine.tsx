import { TableCell, TextField, TableRow } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { ChangeEvent, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { contactSlice } from "../store/redusers/ContactSlice";
import MuiPhoneNumber from "material-ui-phone-number";
const useStyle = makeStyles((theme) => ({
  root: { color: "#000", "&:hover": { color: "blue" } },
}));
interface TableLine {
  name?: string;
  phone?: string;
  index?: number;
}
export const TableLine = ({ name, phone, index }: TableLine) => {
  const [openEdit, setOpenEdit] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const { deleteById, updateById } = contactSlice.actions;
  const [changeName, setChangeName] = useState<string>("");
  const [changePhone, setChangePhone] = useState<
    string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  >("");
  const setNewDataContact = () => {
    let data = {
      index: index,
      contactData: { name: changeName, phone: changePhone },
    };
    dispatch(updateById(data));
    setOpenEdit(false);
  };
  const openEditForm = () => {
    openEdit === false ? setOpenEdit(true) : setOpenEdit(false);
  };
  const classes = useStyle();

  return (
    <>
      {openEdit == true ? (
        <>
          <TableCell component="th" scope="row">
            <TextField
              id="outlined-basic"
              label="Contact Name"
              variant="outlined"
              onChange={(e) => {
                setChangeName(e.target.value);
              }}
            />
          </TableCell>
          <TableCell align="right">
            {" "}
            <MuiPhoneNumber
              defaultCountry={"us"}
              onChange={(event) => {
                setChangePhone(event);
              }}
            />
          </TableCell>
          <TableCell align="right">
            <CheckIcon
              fontSize="large"
              className={classes.root}
              onClick={setNewDataContact}
            />
          </TableCell>
          <TableCell align="right">
            <HighlightOffIcon
              fontSize="large"
              className={classes.root}
              onClick={openEditForm}
            />
          </TableCell>
        </>
      ) : (
        <>
          <TableCell component="th" scope="row">
            {name}
          </TableCell>
          <TableCell align="right">{phone}</TableCell>
          <TableCell align="right">
            <EditIcon className={classes.root} onClick={openEditForm} />
          </TableCell>
          <TableCell align="right">
            <DeleteIcon
              className={classes.root}
              onClick={() => {
                dispatch(deleteById(index));
              }}
            />
          </TableCell>
        </>
      )}
    </>
  );
};
