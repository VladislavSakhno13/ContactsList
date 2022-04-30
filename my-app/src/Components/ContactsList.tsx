import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IContact } from "../models/IContact";
import { contactSlice } from "../store/redusers/ContactSlice";
import { TableLine } from "./TableLine";
const useStyle = makeStyles((theme) => ({
  root: { color: "red", "&:hover": { color: "blue" } },
}));
export const ContactsList = () => {
  const [openEdit, setOpenEdit] = useState<Boolean>(false);
  const [data, setData] = useState<any>([]);
  const { Contacts } = useAppSelector((state) => state.contactReducer);
  const dispatch = useAppDispatch();
  const { deleteById } = contactSlice.actions;
  useEffect(() => {
    setData(Contacts);
  }, [Contacts]);
  const openEditForm = () => {
    openEdit === false ? setOpenEdit(true) : setOpenEdit(false);
  };
  const classes = useStyle();
  return (
    <Grid container style={{ marginTop: "30px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Contact Name</TableCell>
              <TableCell align="right">Contact Phone</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data: any, i: number) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableLine index={i} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
