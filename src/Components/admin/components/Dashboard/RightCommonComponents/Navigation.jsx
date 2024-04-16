import RightMenu from "../RightMenu.jsx";

export default function Navigation({ data }) {
  return (
    <div className='w-full flex gap-5 border-b items-center pl-6'>
      <RightMenu navItems={data} />
    </div>
  );
}
