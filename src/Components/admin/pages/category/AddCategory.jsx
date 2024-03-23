import { BulkUserIcon, CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import AddSection from "../../components/RightCommonComponents/AddSection";
import Hero from "../../components/category/Hero";

export default function AddCategory({ head_title, hero_name }) {
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
      <AddSection />
    </>
  );
}
