// import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Pie, Tooltip, Cell } from "recharts";
import { Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

// import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
// import SoftBox from 'components/SoftBox'
// import SoftTypography from 'components/SoftTypography'
// import Card from '@mui/material/Card'
// import Table from 'examples/Tables/Table'
// import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
// import Grid from '@mui/material/Grid'
import SoftTypography from "components/SoftTypography";
import React, { useState } from 'react';
// import { Card, Button, TextField } from '@material-ui/core';
import { Button, Card, TextField } from '@mui/material';
// import DashboardLayout from 'layouts/DashboardLayout';
import SoftBox from 'components/SoftBox';
// import ReportsBarChart from 'components/ReportsBarChart';

function Improvepage() {
    const data1 = [

		{ month: "Fast Food", value: 3 },
		{ month: "Travel", value: 5.5 },
		{ month: "Games", value: 2 },
		{ month: "Comics", value: 8.5 },
		{ month: "Movie", value: 1.5 },
		
	];
    const categoryData = [
		{ label: "LIC", value: 10 },
		{ label: "Education", value: 15 },
		{ label: "Educational Loans", value: 20 },
		{ label: "Medical Expenses", value: 20 },
		{ label: "Providant Fund", value: 20 },
	]    
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
        <Card style={{margin: "10px"}}>
          <SoftBox px={2}  py={5} >
          <SoftTypography variant="h4">Expenditure Expenses</SoftTypography>
								<BarChart
									xAxis={[{ scaleType: 'band', data: ['Janurary', 'April', 'August', "December"] }]}
									series={[{ data: [4, 3, 5, 4] ,label: "fixed"}, { data: [1, 6, 3, 7],label: "necessary" }, { data: [2, 5, 6, 7] , label:"variable"}]}
									width={1000}
									height={300}
								/>
          </SoftBox>
        </Card>
        <div style={{display: "flex"}}>
        <Card style={{width: "70%",margin: "10px"}}>
          <SoftBox px={2} py={5}>
          <SoftTypography variant="h4">Debt Repayment</SoftTypography>
          <BarChart
									xAxis={[
										{
											id: 'barCategories',
											data: ["Credit Card", "EMI","House Rent","personal Loan","Educational Loan"],
											scaleType: "band",
										},
									]}
									series={[
										{
											data: [50, 70, 30,60,70],
										},
									]}
									width={700}
									height={300}
								/>
          </SoftBox>
          
          
        </Card>
        <Card style={{width: "50%",margin: "10px"}}>
          <SoftBox px={2} py={5}>
          <SoftTypography variant="h4">Booming Stocks</SoftTypography>
          </SoftBox>
          
        </Card>

        </div>

        <div style={{display: "flex"}}>
        <Card style={{width: "50%",margin: "10px"}}>
          <SoftBox px={2} py={3}>
          <SoftTypography variant="h4">Tax Free Elements</SoftTypography>
          <PieChart
									series={[
										{
											data: categoryData,
											outerRadius : 125,
											highlightScope: { fade: 'global', highlight: 'item' },
											faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' , outerRadius : 100 },
											
										},
									]}
									height={400}
								/>
          </SoftBox>
          
          
        </Card>
        <Card style={{width: "50%",margin: "10px"}}>
          <SoftBox px={2} py={3}>
          <SoftTypography variant="h4">Unnecessary Expenses</SoftTypography>
          <LineChart
									style={{ marginTop: "20px" }}
									width={500}
									height={350}
									data={data1}
									margin={{ top: 6, right: 30, left: 20, bottom: 5 }}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="month" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
          </SoftBox>
          
        </Card>

        </div>
        
      </SoftBox>
    </DashboardLayout>
    
      
    
  )
}

export default Improvepage