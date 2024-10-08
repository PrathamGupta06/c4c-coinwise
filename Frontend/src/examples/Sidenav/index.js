

import { useEffect } from "react";

import { useLocation, NavLink } from "react-router-dom";

import logo from "./logo.png"
import Button from "@mui/material/Button";
import PropTypes from "prop-types";


import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";


import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";



import SidenavCollapse from "examples/Sidenav/SidenavCollapse";



import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import useAddPdf from "Hooks/useAddPdf";

import { useSoftUIController, setMiniSidenav } from "context";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Sidenav({ color, brand, brandName, routes, ...rest }) {
	const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentSidenav } = controller;
	const location = useLocation();
	const { pathname } = location;
	const collapseName = pathname.split("/").slice(1)[0];
	const { loading, addPdf } = useAddPdf();
	const closeSidenav = () => setMiniSidenav(dispatch, true);
	
	const navigate = useNavigate();

	const fileHandler = async (e) => {
		e.preventDefault();
		const file = document.getElementById("upload").files[0];
		const formData = new FormData();
		console.log(file);
		formData.append("file", file);
		// await addPdf(formData);

		const res = await fetch('http://localhost:5000/upload_statement_pdf', {
			method: 'POST',
			body: formData
		}).then(response => response.json())
		if (res.ok) {
			console.log(res);
		}
		// const jsonResponse = res;

		// Convert the JSON response to a string
		

		// Store the stringified JSON response in local storage
		localStorage.setItem("pdf", "Available");
		console.log(res);
		navigate("/statements");
	}

	useEffect(() => {

		function handleMiniSidenav() {
			setMiniSidenav(dispatch, window.innerWidth < 1200);
		}


		window.addEventListener("resize", handleMiniSidenav);
	

		handleMiniSidenav();


		return () => window.removeEventListener("resize", handleMiniSidenav);
	}, [dispatch, location]);


	const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
		let returnValue;

		if (type === "collapse") {
			returnValue = href ? (
				<Link
					href={href}
					key={key}
					target="_blank"
					rel="noreferrer"
					sx={{ textDecoration: "none" }}
				>
					<SidenavCollapse
						color={color}
						name={name}
						icon={icon}
						active={key === collapseName}
						noCollapse={noCollapse}
					/>
				</Link>
			) : (
				<NavLink to={route} key={key}>
					<SidenavCollapse
						color={color}
						key={key}
						name={name}
						icon={icon}
						active={key === collapseName}
						noCollapse={noCollapse}
					/>
				</NavLink>
			);
		} else if (type === "title") {
			returnValue = (
				<SoftTypography
					key={key}
					display="block"
					variant="caption"
					fontWeight="bold"
					textTransform="uppercase"
					opacity={0.6}
					pl={3}
					mt={2}
					mb={1}
					ml={1}
				>
					{title}
				</SoftTypography>
			);
		} else if (type === "divider") {
			returnValue = <Divider key={key} />;
		}

		return returnValue;
	});

	return (
		<SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
			<SoftBox pt={3} pb={1} px={4} textAlign="center">

				<SoftBox
					display={{ xs: "block", xl: "none" }}
					position="absolute"
					top={0}
					right={0}
					p={1.625}
					onClick={closeSidenav}
					sx={{ cursor: "pointer" }}
				>
					<SoftTypography variant="h6" color="secondary">
						<Icon sx={{ fontWeight: "bold" }}>close</Icon>
					</SoftTypography>
				</SoftBox>
				<SoftBox component={NavLink} to="/" display="flex" alignItems="center">
					{brand && <SoftBox component="img" src={logo} width="2rem" />}
					<SoftBox
						width={!brandName && "100%"}
						sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
					>
						<SoftTypography component="h6" variant="button" fontWeight="medium">
							{brandName}
						</SoftTypography>
					</SoftBox>
				</SoftBox>
			</SoftBox>
			<Divider />
			<List>{renderRoutes}</List>
			<SoftBox flexGrow={1} >
				<Card style={{ marginTop: "25rem" }}>


					<input type="file" id="upload" style={{ display: "none" }} onChange={fileHandler}></input>
					<Button type="submit" style={{ color: "black", fontSize: "0.8rem", width: "13rem", height: "3.3rem" }}><i className="fa-solid fa-upload" style={{ marginRight: "1rem" }}></i><label htmlFor="upload">{!loading ? "Upload" : "Loading..."}</label></Button>

				</Card>
			</SoftBox>

		</SidenavRoot>
	);
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
	color: "info",
	brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
	brand: PropTypes.string,
	brandName: PropTypes.string.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
