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
        <DepositAmount amount="0" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="1000" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          02/06/18
        </SoftTypography>,
      narration: <Narration name={"GMITSA/MY0326/19"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="0" />
      ),
      DepositAmount: (
        <DepositAmount amount="14,955.00" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="299,064.95" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          03/06/18
        </SoftTypography>,
      narration: <Narration name={"IB BILLPAY DR-HDFCPE-54XXX"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="5,000.00" />
      ),
      DepositAmount: (
        <DepositAmount amount="0" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="27,778.97" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          06/06/18
        </SoftTypography>,
      narration: <Narration name={"NEFT DR-UBIN0539686"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="1,285.98" />
      ),
      DepositAmount: (
        <DepositAmount amount="0" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="22,778.97" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          04/06/18
        </SoftTypography>,
      narration: <Narration name={"UPI-3037020114090"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="0" />
      ),
      DepositAmount: (
        <DepositAmount amount="7,000.00" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="29,778.97" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">
          04/06/18
        </SoftTypography>,
      narration: <Narration name={"EMI 4923306 CHQ S49233060051"} />,
      withdrawlAmount: (
        <WithdrawlAmount amount="0" />
      ),
      DepositAmount: (
        <DepositAmount amount="7,000.00" />
      ),
      ClosingBalance: (
        <ClosingBalance amount="29,778.97" />
      ),
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">02/06/18</SoftTypography>,
      narration: <Narration name={"GM1TSA/MY0326/19"} />,
      withdrawlAmount: <WithdrawlAmount amount="14,955.00" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="29,064.95" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">03/06/18</SoftTypography>,
      narration: <Narration name={"IB BILLPAY DR-HDFCPE-545964XXXXXX3563"} />,
      withdrawlAmount: <WithdrawlAmount amount="1,285.98" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="27,778.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">04/06/18</SoftTypography>,
      narration: <Narration name={"NEFT DR-UBIN0539686-RAJU DUBEY-NETBANK"} />,
      withdrawlAmount: <WithdrawlAmount amount="5,000.00" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="22,778.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">04/06/18</SoftTypography>,
      narration: <Narration name={"UPI-303702011409044-9307676700@UPI-81551"} />,
      withdrawlAmount: <WithdrawlAmount amount="0" />,
      DepositAmount: <DepositAmount amount="7,000.00" />,
      ClosingBalance: <ClosingBalance amount="29,778.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">05/06/18</SoftTypography>,
      narration: <Narration name={"EMI 4923306 CHQ S49233060051"} />,
      withdrawlAmount: <WithdrawlAmount amount="2,268.00" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="27,510.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">05/06/18</SoftTypography>,
      narration: <Narration name={"UPI-303702011409044-9307676700@UPI-81561"} />,
      withdrawlAmount: <WithdrawlAmount amount="0" />,
      DepositAmount: <DepositAmount amount="1,500.00" />,
      ClosingBalance: <ClosingBalance amount="29,010.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">07/06/18</SoftTypography>,
      narration: <Narration name={"EMI 50037630 CHQ S500376300091"} />,
      withdrawlAmount: <WithdrawlAmount amount="5,333.00" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="23,677.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">09/06/18</SoftTypography>,
      narration: <Narration name={"NHDF6376325463/SBI CARDS"} />,
      withdrawlAmount: <WithdrawlAmount amount="2,820.00" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="20,857.97" />,
    },
    {
      date: <SoftTypography variant="caption" fontWeight="medium">12/06/18</SoftTypography>,
      narration: <Narration name={"NHDF6385796167/BILLDKVODAFONEINDIAL"} />,
      withdrawlAmount: <WithdrawlAmount amount="119.18" />,
      DepositAmount: <DepositAmount amount="0" />,
      ClosingBalance: <ClosingBalance amount="20,738.79" />,
    },
    
    
  ],
};

export default authorsTableData;
