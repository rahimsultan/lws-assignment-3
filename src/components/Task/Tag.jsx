/* eslint-disable react/prop-types */
function Tag({ value }) {
  return (
    <li>
      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
        {value}
      </span>
    </li>
  );
}

export default Tag;
