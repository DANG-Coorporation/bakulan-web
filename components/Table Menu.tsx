import React, { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

const TableMenu = () => {
  const [products, setProducts] = useState<Product[]>([]); // Ubah nama variabel menjadi "products"

  useEffect(() => {
    // Lakukan permintaan GET ke API untuk mengambil data produk
    fetch("http://localhost:8081/api/products", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzUzODQwMSwiZXhwIjoxNjk3NTY3MjAxfQ.nONpiEy0vmWwKJH2cKMV400hTssRDlTC1xTekp4hnbk",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Gunakan data di sini
        console.log(data);
        setProducts(data.data.products); // Set products dari data.data.products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {products.length > 0 ? ( // Ubah kondisi ini menjadi "products.length > 0"
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Stok
              </th>
              <th className="px-6 py-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  Rp. {product.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button className="text-orange-700 hover:text-orange-900">
                    Edit
                  </button>
                  <button className="text-red-700 hover:text-red-900 ml-2">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TableMenu;
