const RenderInputFields = ({
  ann_type,
  title,
  setTitle,
  description,
  setDescription,
  link,
  setLink,
  setActive,
}) => {
  const type = ann_type.toLocaleLowerCase();
  switch (type) {
    case "announcement":
      return (
        <>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Title
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className='email shrink-0 space-y-2'>
            <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Description
            </label>
            <textarea
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Active
            </label>
            <select
              onChange={(e) => setActive(e.target.value === "true")}
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            >
              <option value=''>---</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        </>
      );
    case "news":
      return (
        <>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Title
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Link
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Active
            </label>
            <select
              onChange={(e) => setActive(e.target.value === "true")}
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            >
              <option value=''>---</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <div className='email shrink-0 space-y-2'>
            <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Description
            </label>
            <textarea
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>{" "}
        </>
      );
    case "links":
      return (
        <>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Title
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Link
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Active
            </label>
            <select
              onChange={(e) => setActive(e.target.value === "true")}
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            >
              <option value=''>---</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default RenderInputFields;
