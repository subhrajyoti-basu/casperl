import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";

type DummyData = {
    Id: number;
    name: string;
    dTime: string;
    lUpdated: string;
    cState: string;
}

const rows: DummyData[] = [
    { Id: 1, name: 'building something', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 2, name: 'casperl network', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 3, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 4, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 5, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 6, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 7, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 8, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 9, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 10, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 11, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 12, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' },
    { Id: 13, name: 'name', dTime: '21 Mar', lUpdated: '20 mar', cState: 'tested' }
]

export const DataTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) =>{
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
    }
    return (
        <Container maxWidth="lg">
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className="bold">
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Deploy Time</TableCell>
                            <TableCell align="right">Last Updated</TableCell>
                            <TableCell align="right">Current State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: 'white' }}>
                        {rows.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell align="left">{row.Id}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.dTime}</TableCell>
                                    <TableCell align="right">{row.lUpdated}</TableCell>
                                    <TableCell align="right">{row.cState}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}                              
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    );
}