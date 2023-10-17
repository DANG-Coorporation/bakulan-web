import React from "react";

const Table = () => {
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
                Nama Menu
              </th>

              <th className="px-6 py-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">123</td>
              <td className="px-6 py-4 whitespace-no-wrap">Food</td>
              <td className="px-6 py-4 whitespace-no-wrap">Nasi Goreng</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button className="text-orange-700 hover:text-orange-900">
                  Edit
                </button>
                <button className="text-red-700 hover:text-red-900 ml-2">
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">4</td>

              <td className="px-6 py-4 whitespace-no-wrap">Drink</td>
              <td className="px-6 py-4 whitespace-no-wrap">Jus Jeruk</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button className="text-orange-700 hover:text-orange-900">
                  Edit
                </button>
                <button className="text-red-700 hover:text-red-900 ml-2">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
