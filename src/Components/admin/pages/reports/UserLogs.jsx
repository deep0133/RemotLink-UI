import { ExportIcon, ReportIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import { ReportsRightMenu } from "../../data";

export default function UserLogs() {
  return (
    <>
      <Header icon={<ReportIcon />} title={"Reports"} />
      <Navigation data={ReportsRightMenu} />
      <Hero
        name={"User Login logs"}
        description={`Manage the logs here for each user`}
        icon={<ExportIcon />}
        btnText={`Export`}
        btnLink={""}
      />
    </>
  );
}
