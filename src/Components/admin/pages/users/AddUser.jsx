import { BulkUserIcon, CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import AddSection from "../../components/RightCommonComponents/AddSection";
import Hero from "../../components/category/Hero";

export default function AddUser({ head_title, hero_name }) {
  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={"Users"} />
      <Hero
        name={hero_name}
        description={
          "Streamline the process of adding new users to your system."
        }
        icon={<BulkUserIcon />}
        btnText={"Bulk Add Users"}
        btnLink={""}
      />
      <AddSection
        type1={"Name"}
        type2={"Email"}
        type3={"phone Number"}
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
