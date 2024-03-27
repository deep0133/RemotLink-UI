import { CategoryIcon, UsersIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { CategroyRightMenu } from "../../data";
import Hero from "../../components/category/Hero";
import CategoryList from "../../components/category/CategoryList";
import SearchFilter from "../../components/category/SearchFilter";
export default function SiteUserCategory({
  data,
  title,
  name,
  deleteApi,
  btnLink,
  deleteLoading,
  handleDelete,
}) {
  return (
    <>
      <Header icon={<CategoryIcon />} title={title} subTitle={"Categor"} />
      <Navigation data={CategroyRightMenu} />
      <Hero
        name={name + " Category"}
        description={`Manage the ${name.toLowerCase()} categories here`}
        icon={<UsersIcon />}
        btnText={`Add ${name.toLowerCase()} Category`}
        btnLink={btnLink}
      />
      <SearchFilter />
      <CategoryList
        data={data}
        path={name.toLowerCase()}
        deleteApi={deleteApi}
        loading={deleteLoading}
        handleDelete={handleDelete}
      />
    </>
  );
}
