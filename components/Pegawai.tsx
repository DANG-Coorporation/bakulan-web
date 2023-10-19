import React from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import TablePegawai from "./TablePegawai";

const Pegawai = () => {
  return (
    <>
      <h1 className="">Pegawai</h1>
      <div className="flex justify-between mt-10 mb-10">
        <SearchInput placeholder="Cari Pegawai..." classname="w-30% mr-2" />
        <Button item="Pegawai" />
      </div>
      <TablePegawai />
    </>
  );
};

export default Pegawai;
