import { Input } from "@nextui-org/react";

export default function UserInput() {
  return (
    <>
      <div className="relative w-full max-sm:w-72 ">
        <Input
          className="w-full px-5 h-5 justify-center"
          type="Search"
          label="Search"
        />
        <i className="ri-search-2-line absolute -bottom-1 right-7 text-xl cursor-pointer"></i>
      </div>
    </>
  );
}
