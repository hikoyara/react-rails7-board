import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, state, id, category, label) {
    return { name, state, id, category, label };
}

// const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0), createData("Ice cream sandwich", 237, 9.0, 37, 4.3), createData("Eclair", 262, 16.0, 24, 6.0), createData("Cupcake", 305, 3.7, 67, 4.3), createData("Gingerbread", 356, 16.0, 49, 3.9)];

const check = (data) => {
    if (data) {
        return data;
    } else {
        return "未設定";
    }
};

export default function CustomizedTables(props) {
    const { members } = props;
    const rows = [];

    members.map((member) => {
        rows.push(createData(check(member.name), check(member.state), check(member.id), check(member.category), check(member.label)));
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Label</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.state}</TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.label}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
