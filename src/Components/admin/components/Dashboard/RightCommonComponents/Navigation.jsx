import RightMenu from "../RightMenu";

export default function Navigation({ data, selected }) {
  return (
    <div className='w-full flex gap-5 border-b items-center pl-6'>
      <RightMenu navItems={data} selected={selected} />
    </div>
  );
}
