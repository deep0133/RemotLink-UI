import RightMenu from "../RightMenu";

export default function Navigation({ data }) {
  return (
    <div className='w-full flex gap-5 border-y items-center mt-3 pl-6'>
      <RightMenu navItems={data} />
    </div>
  );
}
