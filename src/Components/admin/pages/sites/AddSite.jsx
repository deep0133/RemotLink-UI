import { SitesIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import AddSection from "../../components/RightCommonComponents/AddSection";
import Hero from "../../components/category/Hero";

export default function AddUser() {
  return (
    <>
      <Header icon={<SitesIcon />} title={"Add Sites"} subTitle={"Sites"} />
      <Hero
        name={"Add New Site"}
        description={
          "Streamline the process of adding new sites to your system."
        }
      />
      <AddSection
        type1={"Site Name"}
        type2={"Site URL"}
        type3={"Category"}
        type4={"Description"}
        values={[
          "Steve Rogers",
          "steverogers@gmail.com",
          "+91-8989858974",
          "Bandra Kurla Complex, Siddharath Nagar, Vakola, Vicinity, Mumbai, Maharashtra 400055",
        ]}
      />
    </>
  );
}
