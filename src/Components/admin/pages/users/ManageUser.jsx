import { BulkUserIcon, UsersIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/user/Card";
import { ManageUserData } from "../../data";

export default function ManageUser() {
  return (
    <>
      <Header icon={<UsersIcon />} title={"Users"} />
      <Hero
        name={`Manage Users`}
        description={`Manage and organize all users efficiently.`}
        icon={<UsersIcon />}
        icon2={<BulkUserIcon />}
        btnText={`Add User`}
        btnText2={`Bulk Add User`}
        btnCount={2}
        btnLink={""}
      />
      <SearchFilter />
      <Card
        data={ManageUserData}
        path={"Hello".toLowerCase()}
        type1={"Name"}
        type2={"Email"}
        type3={"Phone Number"}
        type4={"Category"}
        type5={"Action"}
      />
    </>
  );
}
