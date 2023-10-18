import React, { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  Category: { name: string };
  price: number;
  stock: number;
};

type TableMenuProps = {
  categoryFilter: string;
  nameFilter: string;
};

const TableMenu: React.FC<TableMenuProps> = ({
  categoryFilter,
  nameFilter,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(5);
  const [sortMethod, setSortMethod] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    fetch(
      `http://localhost:8081/api/product?page=${currentPage}&limit=${pageSize}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYW1hIEthc2lyIiwiZW1haWwiOiJrYXNpckBleGFtcGxlLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzYyODc4NywiZXhwIjoxNjk3NjU3NTg3fQ.gea-dMHXWpoHVoqPy0uJ5jmVllr1EMmZVCBkAUma0XA",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.products);
        setTotalPages(data.data.totalPages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  const sortedProducts = products
    .filter((product) => {
      if (categoryFilter) {
        return product.Category.name === categoryFilter;
      }
      if (nameFilter) {
        return product.name.toLowerCase().includes(nameFilter.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => {
      if (sortMethod === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortMethod === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });

  const handleSortChange = (method: any) => {
    if (method === sortMethod) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortMethod(method);
      setSortDirection("asc");
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {sortedProducts.length > 0 ? (
        <table className="min-w-full">
          <thead>
            <tr>
              <th
                className={`
                px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider
                sortable-header ${sortMethod === "name" && "active"}`}
                onClick={() => handleSortChange("name")}
              >
                Nama Produk
                {sortMethod === "name" && (
                  <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                )}
              </th>
              <th
                className={`
                px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider
                sortable-header ${sortMethod === "price" && "active"}`}
                onClick={() => handleSortChange("price")}
              >
                Harga
                {sortMethod === "price" && (
                  <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                )}
              </th>
              <th className="px-6 py-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  Rp. {product.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex">
                    <button className="text-orange-700 hover:text-orange-900">
                      Edit
                    </button>
                    <button className="text-red-700 hover:text-red-900 ml-2">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-10">
          <button
            className={`${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-600"
            } text-white font-bold py-2 px-4 rounded-l ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className={`${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-600"
            } text-white font-bold py-2 px-4 rounded-r ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TableMenu;
