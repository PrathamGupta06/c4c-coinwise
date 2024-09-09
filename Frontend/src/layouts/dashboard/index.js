


import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import './index.css';
import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from 'react-minimal-pie-chart';
import { PieChart } from '@mui/x-charts/PieChart';
// import { LineChart } from "@mui/x-charts";
import { Pie, Tooltip, Cell } from "recharts";
import { Typography } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";




import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';




import { Card } from "@mui/material";
import { useState, useEffect } from "react";

function Dashboard() {
	// const { size } = typography;
	// const { chart, items } = reportsBarChartData;

	// const pieData = {
	// 	chart: {
	// 		labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	// 		datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
	// 	},
	// }

	// const data = [
	// 	{ name: 'Subscription', value: 400 },
	// 	{ name: 'Education', value: 300 },
	// 	{ name: 'Grocery', value: 300 },
	// 	{ name: 'Food', value: 200 },

	// ];
	const [isAuth, setIsAuth] = useState(false)
	// const isAuth = localStorage.getItem("pdf")

	useEffect(() => {
		const checkAuth = () => {
		  const storedData = localStorage.getItem("pdf");
		  if (storedData) {
			setIsAuth(true);
		  } else {
			setIsAuth(false);
		  }
		};
	  
		
		checkAuth();
	  }, []);

	const pieData = [
		{ name: "UPI", value: !isAuth ? 0 : 89, details: "Unified Payments Interface" },
		{ name: "Net Banking", value: !isAuth ? 0 : 25, details: "Internet Banking" },
		{ name: "NFT", value: !isAuth ? 0 : 23, details: "Non-Fungible Token" },
		{ name: "EMI", value: !isAuth ? 0 : 6, details: "Equated Monthly Installment" },
		{ name: "Credit Card", value: !isAuth ? 0 : 5, details: "Credit Card Payments" },
		{ name: "Debit Card", value: !isAuth ? 0 : 15, details: "Debit Card Payments" },
	];
	// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];
	const categoryData = [
		{ label: "Food", value: !isAuth ? 0 : 2500 },
		{ label: "Education", value: !isAuth ? 0 : 8000 },
		{ label: "Grocery", value: !isAuth ? 0 : 4500 },
		{ label: "Medical", value: !isAuth ? 0 : 15000 },
		{ label: "Bills and Recharges", value: !isAuth ? 0 : 2200 },
		{ label: "Others", value: !isAuth ? 0 : 5300 },
	]
	const data = [

		{ month: "January", value: !isAuth ? 0 : 8 },
		{ month: "February", value: !isAuth ? 0 : 9 },
		{ month: "March", value: !isAuth ? 0 : 2 },
		{ month: "April", value: !isAuth ? 0 : 3 },
		{ month: "May", value: !isAuth ? 0 : 15 },
		{ month: "June", value: !isAuth ? 0 : 51 },
		{ month: "July", value: !isAuth ? 0 : 52 },
		{ month: "August", value: !isAuth ? 0 : 17 },
		{ month: "September", value: !isAuth ? 0 : 25 },
		{ month: "October", value: !isAuth ? 0 : 53 },
		{ month: "November", value: !isAuth ? 0 : 15 },
		{ month: "December", value: !isAuth ? 0 : 12 },
	];

	const uData = !isAuth ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
	const pData = !isAuth ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : [23, 45, 67, 89, 90, 100, 120, 130, 140, 150, 160, 170];
	const xLabels = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];
	const paymentMethods = [
		"UPI",
		"Net Banking",
		"NFT",
		"EMI",
		"Credit Card",
		"Debit Card",
	];




	const series = [
		{ data: isAuth ?  [10, 20, 30, 40] : [0,0,0,0], label: "fixed" },
		{ data: isAuth ? [30 , 10 , 15 , 25] : [0,0,0,0], label: "necessary" },
		{ data: isAuth ? [3 , 13 , 15 , 55] : [0,0,0,0], label: "variable" }
	];






	return (
		<DashboardLayout>
			<DashboardNavbar />
			<SoftBox py={3}>
				<SoftBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Net Balance" }}
								count={!isAuth ? "₹0" : "₹,305,699"}
								// percentage={{ color: "success", text: "+55%" }}
								icon={{ color: "info", component: "paid" }}
							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard

								title={{ text: "Liability" }}
								count={!isAuth ? "₹0" : "₹14,800"}

								icon={{ color: "info", component: "public" }}
							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Assests" }}
								count={!isAuth ? "₹0" : "₹2,55,000"}

								icon={{ color: "info", component: "emoji_events" }}
							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Expenses" }}
								count={!isAuth ? "₹0" : "₹19,500"}

								icon={{
									color: "info",
									component: "shopping_cart",
								}}
							/>
						</Grid>
					</Grid>
				</SoftBox>
				<SoftBox mb={3}>
					<Grid container spacing={0}>

						<Grid xs={9} lg={5} style={{ margin: "5px" }}>
							<Card style={{ height: "100%", width: "100%" }}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Total Expentiture</Typography>

								<PieChart
									series={[
										{
											data: categoryData,
											outerRadius: 125,
											highlightScope: { fade: 'global', highlight: 'item' },
											faded: { innerRadius: 30, additionalRadius: -30, color: 'gray', outerRadius: 100 },

										},
									]}
									height={200}
								/>

							</Card>

						</Grid>

						<Grid xs={9} lg={6}  >
							<Card style={{ height: "100%", width: "100%" }}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Payment Methods</Typography>
								<BarChart
									xAxis={[
										{
											id: 'barCategories',
											data: paymentMethods,
											scaleType: "band",
										},
									]}
									series={[
										{
											data: isAuth ? [10, 20, 30, 40, 50, 60] : [0, 0, 0, 0, 0, 0],
										},
									]}
									width={600}
									height={300}
								/>


							</Card>
						</Grid>

						<Grid xs={9} lg={11} style={{ margin: "5px" }}>
							<Card style={{ height: "100%", width: "100%" }}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Fixed Memory Variable</Typography>
								<BarChart
									xAxis={[{ scaleType: 'band', data: ['Janurary', 'April', 'August', "December"] }]}
									series={series}
									width={1000}
									height={300}
								/>

							</Card>
						</Grid>
						<Grid xs={9} lg={5} style={{ margin: "5px" }}>
							<Card style={{ height: "100%", width: "100%" }}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Saving Ratio</Typography>
								<BarChart
									width={450}
									height={300}
									series={[
										{ data: pData, label: 'Expenditure', id: 'pvId', stack: 'total' },
										{ data: uData, label: 'Savings', id: 'uvId', stack: 'total' },
									]}
									xAxis={[{ data: xLabels, scaleType: 'band' }]}
								/>
							</Card>
						</Grid>

						<Grid item xs={11} lg={6} style={{ margin: "5px" }}>
							<Card style={{ height: "100%", width: "100%" }}>
								<SoftTypography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Intrest Rate Over Year</SoftTypography>
								<LineChart
									style={{ marginTop: "10px" }}
									width={500}
									height={300}
									data={data}
									margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="month" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
							</Card>
						</Grid>

						<Grid item xs={11} lg={12} style={{ margin: "10px" }}>
							<Card >
								<SoftTypography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Account Balance OverTime</SoftTypography>
								<LineChart
									style={{ marginTop: "10px" }}
									width={1000}
									height={300}
									data={data}
									margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="month" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
							</Card>
						</Grid>
					</Grid>
				</SoftBox>
			</SoftBox>

		</DashboardLayout>
	);
}

export default Dashboard;
