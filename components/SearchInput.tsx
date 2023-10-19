import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchInput(props: any) {
  const {
    classname = "input input-bordered join-item w-full",
    placeholder = "Cari produk...",
  } = props;
  return (
    <div className="join w-full">
      <input className={classname} placeholder={placeholder} />
      <button className="btn btn-square join-item">
        <RiSearchLine />
      </button>
    </div>
  );
}
