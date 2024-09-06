/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { func } from "prop-types";

function Narration({ name }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      {/* <SoftBox mr={2}>
        {/* <SoftAvatar src={image} alt={name} size="sm" variant="rounded" /> */}
      {/* </SoftBox>} */}
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        {/* <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography> */}
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

function WithdrawlAmount({ amount }) {
  return (
    <SoftBox display="flex"  flexDirection="column">
        <SoftTypography variant="button" color="error" fontWeight="medium">
          {amount}
        </SoftTypography>
      </SoftBox>
  );
}
function DepositAmount({ amount }) {
  return (
    <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" color="success" fontWeight="medium">
          {amount}
        </SoftTypography>
      </SoftBox>
  );
}
function ClosingBalance({ amount }) {
  return (
    <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {amount}
        </SoftTypography>
      </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "date", align: "left" },
    { name: "narration", align: "left" },
    { name: "withdrawlAmount", align: "center" },
    { name: "DepositAmount", align: "center" },
    { name: "ClosingBalance", align: "center" },
  ],

  rows: [
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          23/04/18
        </SoftTypography>,
      narration: <Narration name={"Test"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="1000" />
      ),
      DepositAmount: (
        <DepositAmount amount="10000" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="1000" />
      ),
    },
    
    
  ],
};

export default authorsTableData;
