import React from "react";

function Shop({ thumbnailImage, shopName, shopAccess }) {
  return (
    <>
      <div>
        <img src={thumbnailImage} alt={shopName} />
        <h2>{shopName}</h2>
        <p>{shopAccess}</p>
      </div>
    </>
  );
}

export default Shop;
