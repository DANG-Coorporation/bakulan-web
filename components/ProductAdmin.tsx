import React, { useState, useEffect } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import TableMenu from "./TableMenu";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  Category: { name: string };
  price: number;
  stock: number;
};

const ProductAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categori, setCategori] = useState<Product[]>([]);
  const [selectCategori, setSelectCategori] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Mengambil data dari URL
    axios
      .get("http://localhost:8081/api/categories", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzY3OTk5MiwiZXhwIjoxNjk3NzA4NzkyfQ.aJZpvz3p3zcIvTjraYkIXhYeOCOF-Hl3J1zW2r8cycg",
        },
      })
      .then((response) => {
        setCategori(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 className="">Menu</h1>
      <div className="flex justify-between mt-10 mb-10">
        <SearchInput
          placeholder="Cari Menu..."
          className="w-30% mr-2"
          value={nameFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameFilter(e.target.value)
          }
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Semua</option>
          {categori.map((categori) => (
            <option key={categori.id} value={categori.name}>
              {categori.name}
            </option>
          ))}
        </select>
        <Button item="Menu" onClick={openModal} />
      </div>

      <TableMenu categoryFilter={categoryFilter} nameFilter={nameFilter} />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-4xl mx-auto my-6">
            {/* Konten Modal */}
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              style={{
                position: "absolute",
                width: "1200px",
                height: "800px",
                left: "calc(50% - 600px)",
                top: "calc(50% - 400px)",
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
                <div className="w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">Tambah Gambar</h3>
                  <input
                    type="file"
                    className="input"
                    id="imageInput"
                    accept="image/*"
                  />
                  <div
                    className="mt-4"
                    id="imageContainer"
                    style={{ display: "none" }}
                  >
                    <img
                      src=""
                      alt="Preview Gambar"
                      className="w-full h-auto"
                      id="imagePreview"
                    />
                  </div>
                </div>
                <div className="w-2/3 pl-4 max-w-[calc(100% - 1/3)]">
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Nama</h3>
                    <input className="input input-bordered w-full" />
                  </div>
                  <div className="relative p-6 flex-auto">
                    <h3 className="mb-2 text-lg font-semibold">Kategori</h3>
                    <select
                      className="select select-bordered w-full"
                      value={selectCategori}
                      onChange={(e) => setSelectCategori(e.target.value)}
                    >
                      {categori.map((categori) => (
                        <option key={categori.id} value={categori.name}>
                          {categori.name}
                        </option>
                      ))}
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
