import React, { useState } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import TableMenu from "./Table Menu";

const ProductAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="">Menu</h1>
      <div className="flex justify-between mt-10 mb-10">
        <SearchInput placeholder="Cari Menu..." classname="w-30% mr-2" />
        <Button item="Menu" onClick={openModal} />
      </div>

      <TableMenu />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-4xl mx-auto my-6">
            {/* Konten Modal */}
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              style={{
                position: "absolute",
                width: "1200px", // Sesuaikan lebar modal
                height: "800px", // Sesuaikan tinggi modal
                left: "calc(50% - 600px)", // Sesuaikan posisi horizontal
                top: "calc(50% - 400px)", // Sesuaikan posisi vertikal
                // ... tambahkan properti gaya lainnya di sini
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Tambah Produk</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto flex">
                {/* Bagian Kiri (1/3 dari Modal) */}
                <div className="w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">Tambah Gambar</h3>
                  <input type="file" className="input" />
                </div>
                {/* Bagian Kanan (2/3 dari Modal) dengan lebar maksimal */}
                <div className="w-2/3 pl-4 max-w-[calc(100% - 1/3)]">
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Nama</h3>
                    <input className="input input-bordered w-full" />
                  </div>
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Kategori</h3>
                    <select className="select select-bordered w-full">
                      <option value="kategori1">Kategori 1</option>
                      <option value="kategori2">Kategori 2</option>
                      {/* Tambahkan pilihan kategori lainnya sesuai kebutuhan */}
                    </select>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Harga</h3>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Stok</h3>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-red-500 text-white active-bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
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

export default ProductAdmin;
