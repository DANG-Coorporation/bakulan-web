"use client";

import { useState } from "react";
import { TbChartInfographic } from "react-icons/tb";
import {
  BsFillPostageFill,
  BsFillPersonVcardFill,
  BsListUl,
} from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import Categori from "./Category";
import ProductAdmin from "./ProductAdmin";
import Pegawai from "./Pegawai";

const Dashboard = () => {
  const [selected, setSelected] = useState("Menu");

  const renderSelected = () => {
    if (selected === "Kategori") {
      return <Categori />;
    } else if (selected === "Menu") {
      return <ProductAdmin />;
    } else if (selected === "Pegawai") {
      return <Pegawai />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-base-100 w-1/5 p-4 text-black flex flex-col items-center">
        <div className="grid grid-cols-1 gap-2 text-center">
          <button className="flex items-center justify-center w-80 h-20 normal-case hover:bg-orange-600 hover:text-white hover:rounded-md">
            <TbChartInfographic className="w-6 h-6" />
            <span className="ml-2">Penjualan</span>
          </button>
          <button className="flex items-center justify-center w-80 h-20 normal-case hover:bg-orange-600 hover:text-white hover:rounded-md">
            <BsFillPostageFill className="w-6 h-6" />
            <span className="ml-2">Pesanan</span>
          </button>
          <button
            className="flex items-center justify-center w-80 h-20 normal-case hover:bg-orange-600 hover:text-white hover:rounded-md"
            onClick={() => setSelected("Menu")}
          >
            <FaHamburger className="w-6 h-6" />
            <span className="ml-2">Menu</span>
          </button>
          <button
            className="flex items-center justify-center w-80 h-20 normal-case hover:bg-orange-600 hover:text-white hover:rounded-md"
            onClick={() => setSelected("Kategori")}
          >
            <BsListUl className="w-6 h-6" />
            <span className="ml-2">Kategori</span>
          </button>
          <button
            className="flex items-center justify-center w-80 h-20 normal-case hover:bg-orange-600 hover:text-white hover:rounded-md"
            onClick={() => setSelected("Pegawai")}
          >
            <BsFillPersonVcardFill className="w-6 h-6" />
            <span className="ml-2">Pegawai</span>
          </button>
        </div>
      </div>

      {/* Konten Dashboard (Kanan) */}
      <div className="bg-gray-100 w-4/5 p-4">
        {renderSelected()}
        {/* Isi Konten Dashboard */}
        {/* Tempatkan konten sesuai dengan kebutuhan Anda */}
      </div>
    </div>
  );
};

export default Dashboard;
