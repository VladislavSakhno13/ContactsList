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
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/styles";
//import SearchBar from "material-ui-search-bar";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { TableLine } from "./TableLine";
import { SearchContact } from "./Inputs/SearchContatc";
import { contactSlice } from "../store/redusers/ContactSlice";
export const ContactsList = () => {
  const [data, setData] = useState<any>([]);
  const serachList = (e: string) => {
    let filterContact;
    filterContact = Contacts.filter((x) => x.name.includes(e));
    setData(filterContact);
  };
  const { Contacts } = useAppSelector((state) => state.contactReducer);
  useEffect(() => {
    setData(Contacts);
  }, [Contacts]);
  return (
    <Grid container style={{ marginTop: "30px" }}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search contact"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            serachList(e.target.value);
          }}
        />
        <SearchIcon />
      </Paper>
      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
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
                <TableLine name={data.name} phone={data.phone} index={i} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
