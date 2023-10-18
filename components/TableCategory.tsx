import axios from "axios";
import React, { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  description: string;
}

const Table = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null);

  useEffect(() => {
    // Mengambil data dari URL
    axios
      .get("http://localhost:8081/api/categories", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzYwMTgxNiwiZXhwIjoxNjk3NjMwNjE2fQ.Lk9zCkSpLEZVpmCNUxMifPV_I7uGhgqF4uDTOwPzZSw",
        },
      })
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openDeleteModal = (categoryId: number) => {
    setCategoryToDelete(categoryId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setCategoryToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCategory = (categoryId: number | null) => {
    if (categoryId !== null) {
      axios
        .delete(`http://localhost:8081/api/categories/${categoryId}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzYwMTgxNiwiZXhwIjoxNjk3NjMwNjE2fQ.Lk9zCkSpLEZVpmCNUxMifPV_I7uGhgqF4uDTOwPzZSw",
          },
        })
        .then((response) => {
          // Hapus kategori dari state lokal atau perbarui daftar kategori
          // ...
          console.log("Kategori berhasil dihapus");
          setCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== categoryId)
          );
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        })
        .finally(() => {
          closeDeleteModal();
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nama Kategori
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{category.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {category.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {category.description}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap ">
                  <div className="flex justify-end">
                    <button
                      className="text-red-700 hover:text-red-900 ml-2"
                      onClick={() => openDeleteModal(category.id)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-4xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Konfirmasi Hapus</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeDeleteModal}
                >
                  ×
                </button>
              </div>
              <div className="relative p-10 flex-auto">
                <p>Apakah kamu yakin ingin menghapus kategori ini?</p>
              </div>
              <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-red-500 text-white active-bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDeleteCategory(categoryToDelete)}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-200 text-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={closeDeleteModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
