

// @mui material components
import Card from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from "react";
//  components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

//  examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get_statements', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        setRowData(data);
      })
  }, []);
  const row = rowData.map((row) => {
    return {
      date: row.date,
      narration: row.narration,
      payment_method : row.payment_method,
      category : row.category,
      withdrawal_amount: row.withdrawal_amount,
      deposit_amount: row.deposit_amount,
      closing_balance: row.closing_balance,
      payment_method: row.payment_method,
    }
  });
  const coloumn = ["Data", "Narration", "withdrawal_amount", "deposit_amount", "closing_balance"];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Bank Statements</SoftTypography>
            </SoftBox>
            {/* <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            > */}
              {/* <Table columns={columns} rows={rows} /> */}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="left">Narration</TableCell>
                      <TableCell align="left">Payment Method</TableCell>
                      <TableCell align="left">Category</TableCell>
                      <TableCell align="left">Withdrawal Amount&nbsp;(g)</TableCell>
                      <TableCell align="left">Deposit Amount</TableCell>
                      <TableCell align="left">Closing Balance</TableCell>
                    </TableRow>
                    {row.map((row) => (
                      <TableRow
                        key={row.name}
                        
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.narration}</TableCell>
                        <TableCell align="left">{row.payment_method}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">{row.withdrawal_amount}</TableCell>
                        <TableCell align="left">{row.deposit_amount}</TableCell>
                        <TableCell align="left">{row.closing_balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            {/* </SoftBox> */}
          </Card>
        </SoftBox>

      </SoftBox>

    </DashboardLayout>
  );
}

export default Tables;
