// import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
// import SoftBox from 'components/SoftBox'
// import SoftTypography from 'components/SoftTypography'
// import Card from '@mui/material/Card'
// import Table from 'examples/Tables/Table'
// import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
// import Grid from '@mui/material/Grid'

import React, { useState } from 'react';
// import { Card, Button, TextField } from '@material-ui/core';
import { Button, Card, TextField } from '@mui/material';
// import DashboardLayout from 'layouts/DashboardLayout';
import SoftBox from 'components/SoftBox';
// import ReportsBarChart from 'components/ReportsBarChart';

function UploadPage() {
    const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log('File uploaded:', file);
  };
  return (
    
    
    // <DashboardLayout>
    //     <DashboardNavbar />
    //     <SoftBox py={3}>
    //         <SoftBox mb={3}>
    //         <Card>
    //             <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
    //             <SoftTypography variant="h6">Upload Page</SoftTypography>
    //             </SoftBox>
    //             <SoftBox
    //             sx={{
    //                 "& .MuiTableRow-root:not(:last-child)": {
    //                 "& td": {
    //                     borderBottom: ({ borders: { borderWidth, borderColor } }) =>
    //                     `${borderWidth[1]} solid ${borderColor}`,
    //                 },
    //                 },
    //             }}
    //             >
    //             <ReportsBarChart />
    //             </SoftBox>
    //         </Card>
    //         </SoftBox>
            
    //     </SoftBox>
    // </DashboardLayout>
    <DashboardLayout>
        <DashboardNavbar />
      <SoftBox>
        <Card>
          <SoftBox>
            <form onSubmit={handleSubmit}>
              <TextField
                type="file"
                onChange={handleFileChange}
                variant="outlined"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Upload
              </Button>
            </form>
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
    
      
    
  )
}

export default UploadPage