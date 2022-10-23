import React from 'react'
import './chart.scss'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { LinearProgress } from '@mui/material';

const columns = [
  { id: 'name', label: 'Project Title', minWidth: 170 },
  { id: 'code', label: 'Days Left', minWidth: 100 },   
];

function createData(name, code) {
  
  return { name, code};
}

const rows = [
  createData('India', 'IN'),
  createData('China', 'CN'),
  createData('Italy', 'IT'),
  createData('United States'),
  createData('Canada', 'CA'),
  createData('Australia', 'AU'),
  createData('Germany', 'DE'),
  createData('Ireland', 'IE'),
  createData('Mexico', 'MX'),
  createData('Japan', 'JP'),
  createData('France', 'FR'),
  createData('United Kingdom', 'GB'),
  createData('Russia', 'RU'),
  createData('Nigeria', 'NG'),
  createData('Brazil', 'BR'),
];


const Chart = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="chart">
      <h2>Project Information Portal</h2>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  )
}

export default Chart;