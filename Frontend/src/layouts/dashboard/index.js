


import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import './index.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import PieChart from "examples/Charts/PieChart";


import typography from "assets/theme/base/typography";





import OrderOverview from "layouts/dashboard/components/OrderOverview";


import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { Card } from "@mui/material";
// import { PieChart } from "@mui/icons-material";
// import { PieChart } from "@mui/icons-material";

function Dashboard() {
	const { size } = typography;
	const { chart, items } = reportsBarChartData;

	const pieData = {
		chart: {
			labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
		},
	}

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


						<Grid xs={9} lg={5} style={{ margin: "10px" }}>
							{/* <PieChart
								title="Income Per Category"
								chart={chart}
							/> */}
							<Card style={{ height: "100%"  , width : "100%"}}>
								<Typography variant="h6" style={{ textAlign: "start", margin: "10px" }}>Income Per Category</Typography>
								<PieChart
									series={[
										{
											data: [
												{ id: 0, value: 10, label: "", },
												{ id: 1, value: 15, label: "", },
												{ id: 2, value: 20, label: "",  },
												{ id: 3, value: 20, label: "", },
												{ id: 4, value: 20, label: "", },
											],
											
											innerRadius: 30,
											outerRadius: 100,
											paddingAngle: 5,
											cornerRadius: 5,
											startAngle: -45,							
											
											highlightScope: { fade: 'global', highlight: 'item' },
											faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
											tooltips: { type: 'item'}
										},

									]}
									
									
									width={400}
									height={200}
								/>
							</Card>
							{/* <PieChart
								title="Income Per Category"
								chart={chart}
							/> */}

						</Grid>

						<Grid xs={9} lg={6}  >
							<Card style={{ height: "100%" ,width : "100%"}}>
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
						<Grid item xs={11} lg={6} style={{ margin: "10px", alignItems: "center" }}>
							<GradientLineChart
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
							/>
						</Grid>

					</Grid>
				</SoftBox>

			</SoftBox>

		</DashboardLayout>
	);
}

export default Dashboard;
