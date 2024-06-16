import { useState } from "react";
import { gallery } from "../components/api/gallery";
const Gallery = () => {
  const [selectCategory, setSelectCategory] = useState("hair");

  const handleCategoryClick = (category: string) => {
    setSelectCategory(category);
  };

  const filterCategory =
    selectCategory === "all"
      ? gallery
      : gallery.filter((img) => img.category === selectCategory);
  return (
    <>
      <h2 className="gallert_top">Gallery</h2>
      <div className="categoty_btn">
        <button onClick={() => handleCategoryClick("hair")}>Hair</button>
        <button onClick={() => handleCategoryClick("makeup")}>Makeup</button>
        <button onClick={() => handleCategoryClick("nail")}>Nails</button>
        <button onClick={() => handleCategoryClick("wedding")}>Wedding</button>
      </div>
      <div className="gallery-container">
        {filterCategory.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.img} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
