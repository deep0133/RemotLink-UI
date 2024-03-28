import { CategoryIcon, UsersIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { CategroyRightMenu } from "../../data";
import Hero from "../../components/category/Hero";
import CategoryList from "../../components/category/CategoryList";
import SearchFilter from "../../components/category/SearchFilter";
import { useEffect, useState } from "react";
import sortByCreatedAt from "../../utils/sortByCreatedAt";
export default function SiteUserCategory({
  data,
  title,
  name,
  deleteApi,
  btnLink,
  deleteLoading,
  handleDelete,
}) {
  const [catData, setCatData] = useState(data);

  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setCatData(data);
  }, [data]);

  useEffect(() => {
    setCatData(() => {
      return sortByCreatedAt(data, sort);
    });
  }, [sort]);

  const searchHandler = (val) => {
    setCatData((prev) =>
      data.filter(
        (obj) => obj.name && obj.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

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
      <SearchFilter searchHandler={searchHandler} setSort={setSort} />
      <CategoryList
        data={catData}
        path={name.toLowerCase()}
        deleteApi={deleteApi}
        loading={deleteLoading}
        handleDelete={handleDelete}
      />
    </>
  );
}
