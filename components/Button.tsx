import React from "react";

const Button = (props: any) => {
  const { item, onClick } = props;
  return (
    <>
      <button
        className="w-60 h-10 bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
        onClick={onClick}
      >
        + Tambah {item}
      </button>
    </>
  );
};

export default Button;
