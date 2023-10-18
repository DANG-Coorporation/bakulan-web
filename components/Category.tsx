import React, { useState } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import TableCategory from "./TableCategory";
import axios from "axios";

const Categori = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriName, setCategoriName] = useState("");
  const [categoriDescription, setCategoriDescription] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = () => {
    axios
      .post(
        "http://localhost:8081/api/categories",
        {
          name: categoriName,
          description: categoriDescription,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzYwMTgxNiwiZXhwIjoxNjk3NjMwNjE2fQ.Lk9zCkSpLEZVpmCNUxMifPV_I7uGhgqF4uDTOwPzZSw",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <h1 className="">Kategori</h1>
      <div className="flex justify-between mt-10 mb-10">
        <SearchInput placeholder="Cari kategori..." classname="w-30% mr-2" />
        <Button item="Kategori" onClick={openModal} />
      </div>
      <TableCategory />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-4xl mx-auto my-6">
            {/* Konten Modal */}
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              style={{
                position: "absolute",
                width: "1200px", // Sesuaikan lebar modal
                height: "600px", // Sesuaikan tinggi modal
                left: "calc(50% - 600px)", // Sesuaikan posisi horizontal
                top: "calc(50% - 300px)", // Sesuaikan posisi vertikal
                // ... tambahkan properti gaya lainnya di sini
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Tambah Kategori</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
              {/* Body */}
              <div className="relative p-10 flex-auto">
                <h3 className="mb-0 text-lg font-semibold">Nama Kategori</h3>
                <input
                  className="input input-bordered w-full"
                  onChange={(e) => setCategoriName(e.target.value)}
                />
              </div>
              <div className="relative p-10 flex-auto">
                <h3 className="mb-0 text-lg font-semibold">Deskripsi</h3>
                <input
                  className="input input-bordered w-full"
                  onChange={(e) => setCategoriDescription(e.target.value)}
                />
              </div>
              {/* Footer */}
              <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-red-500 text-white active-bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
                  type="button"
                  onClick={handleAddCategory}
                >
                  Tambahkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categori;
