import { TableCell, TextField, TableRow } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { contactSlice } from "../store/redusers/ContactSlice";
const useStyle = makeStyles((theme) => ({
  root: { color: "red", "&:hover": { color: "blue" } },
}));
interface TableLine {
  name?: string;
  phone?: string;
  index?: number;
}
export const TableLine = ({ name, phone, index }: TableLine) => {
  console.log(index);
  const [openEdit, setOpenEdit] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const { deleteById } = contactSlice.actions;

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
            />
          </TableCell>
          <TableCell align="right">
            {" "}
            <TextField
              id="outlined-basic"
              label="Contact Name"
              variant="outlined"
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
