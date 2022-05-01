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
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { TableLine } from "./TableLine";
export const ContactsList = () => {
  const [data, setData] = useState<any>([]);
  const { Contacts } = useAppSelector((state) => state.contactReducer);
  useEffect(() => {
    setData(Contacts);
    console.log(Contacts);
  }, [Contacts, data]);
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
                <TableLine name={data.name} phone={data.phone} index={i} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
