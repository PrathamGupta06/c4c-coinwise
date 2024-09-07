


import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import './index.css';
import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from 'react-minimal-pie-chart';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { LineChart } from "@mui/x-charts";
import { Pie, Tooltip, PieChart, Cell } from "recharts";
import { Typography } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";


import PropTypes from "prop-types";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import PieChart from "examples/Charts/PieChart";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import typography from "assets/theme/base/typography";





import OrderOverview from "layouts/dashboard/components/OrderOverview";


import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { Card } from "@mui/material";
import { Padding, PieChartOutlineRounded } from "@mui/icons-material";
// import { PieChart } from "@mui/icons-material";
// import { PieChart } from "@mui/icons-material";

function Dashboard() {
	const { size } = typography;
	const { chart, items } = reportsBarChartData;

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

	const pieData = [
		{ name: "UPI", value: 400, details: "Unified Payments Interface" },
		{ name: "Net Banking", value: 300, details: "Internet Banking" },
		{ name: "NFT", value: 300, details: "Non-Fungible Token" },
		{ name: "EMI", value: 200, details: "Equated Monthly Installment" },
		{ name: "Credit Card", value: 278, details: "Credit Card Payments" },
		{ name: "Debit Card", value: 189, details: "Debit Card Payments" },
	];
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];
	const categoryData = [
		{ name: "Food", value: 10 },
		{ name: "Education", value: 15 },
		{ name: "Grocery", value: 20 },
		{ name: "Medical", value: 20 },
		{ name: "Bills and Recharges", value: 20 },
		{ name: "Others", value: 35 },
	]
	const data = [

		{ month: "January", value: 3 },
		{ month: "February", value: 5.5 },
		{ month: "March", value: 2 },
		{ month: "April", value: 8.5 },
		{ month: "May", value: 1.5 },
		{ month: "June", value: 5 },
		{ month: "July", value: 3 },
		{ month: "August", value: 7 },
		{ month: "September", value: 4 },
		{ month: "October", value: 6 },
		{ month: "November", value: 2.5 },
		{ month: "December", value: 5.5 },
	];



	return (
		<DashboardLayout>
			<DashboardNavbar />
			<SoftBox py={3}>
				<SoftBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Cash Withdraw" }}
								count="₹53,000"
								// percentage={{ color: "success", text: "+55%" }}
								icon={{ color: "info", component: "paid" }}
							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Liability" }}
								count="₹45,000"
								percentage={{ color: "error", text: "+3%" }}
								icon={{ color: "info", component: "public" }}

							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Assests" }}
								count="₹3,462"
								percentage={{ color: "success", text: "-2%" }}
								icon={{ color: "info", component: "emoji_events" }}
							/>
						</Grid>
						<Grid item xs={12} sm={6} xl={3}>
							<MiniStatisticsCard
								title={{ text: "Expenses" }}
								count="₹103,43"
								percentage={{ color: "error", text: "+5%" }}
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
								<PieChart width={400} height={400}>
									<Pie
										data={categoryData}
										cx={200}
										cy={200}
										labelLine={false}
										outerRadius={80}
										fill="#8884d8"
										dataKey="value"
									>
										{pieData.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
										))}
									</Pie>
									{/* <Tooltip formatter={TooltipFormatter} /> */}
									<Legend />
								</PieChart>

							</Card>

						</Grid>

						<Grid xs={9} lg={6}  >
							<Card style={{ height: "100%", width: "100%" }}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Payment Methods</Typography>
								<BarChart
									xAxis={[
										{
											id: 'barCategories',
											data: ["UPI", "Net Banking", "NFT", "EMI", "Credit Card", "DebitCard"],
											scaleType: "band",
										},
									]}
									series={[
										{
											data: [50, 70, 30, 15, 25, 5],
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
									series={[{ data: [4, 3, 5, 4] }, { data: [1, 6, 3, 7] }, { data: [2, 5, 6, 7] },]}
									width={1000}
									height={300}
								/>

							</Card>
						</Grid>
						<Grid item xs={11} lg={11} style={{ margin: "5px" }}>
							{/* <GradientLineChart
								title="Account Balance OverTime"
								description={
									<SoftBox display="flex" alignItems="center">
										<SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
											<Icon className="font-bold">arrow_upward</Icon>
										</SoftBox>
										<SoftTypography variant="button" color="text" fontWeight="medium">
											4% more{" "}
											<SoftTypography variant="button" color="text" fontWeight="regular">
												in 2021
											</SoftTypography>
										</SoftTypography>
									</SoftBox>
								}
								height="20.25rem"
								chart={gradientLineChartData}
							/> */}
							<Grid item xs={11} lg={5} style={{ margin: "10px" }}>
								<Card style={{ height: "100%", width: "100%" }}>
									<SoftTypography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Intrest Rate Over Year</SoftTypography>
									<LineChart
										style={{ marginTop: "10px" }}
										width={350}
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



					</Grid>

				</SoftBox>

			</SoftBox>

		</DashboardLayout>
	);
}

export default Dashboard;
