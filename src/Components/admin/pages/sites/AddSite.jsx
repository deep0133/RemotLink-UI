import { SitesIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import AddSection from "../../components/RightCommonComponents/AddSection";
import Hero from "../../components/category/Hero";
import useAdd from "../../hooks/useAdd";

export default function AddUser() {
  const { handleAddNewSite } = useAdd();

  const addFunctionHandler = (d1, d2, d3, d4) => {
    handleAddNewSite("api/sites/categories/add/", {
      name: d1,
      url: d2,
      category: d3,
      description: d4,
    });
  };

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
        submitText={"Save Site"}
        addFunctionHandler={addFunctionHandler}
      />
    </>
  );
}
