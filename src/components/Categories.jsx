import { useState } from "react";

const Categories = () => {
  const categories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              className={activeCategory === i ? "active" : ""}
              onClick={() => setActiveCategory(i)}
              key={i}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
