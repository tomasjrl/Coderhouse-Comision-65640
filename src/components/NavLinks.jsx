import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import PropTypes from "prop-types";

const NavLinks = ({ isMobile }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productsCollection = collection(db, "productos");
        const productSnapshot = await getDocs(productsCollection);
        const uniqueCategories = new Set();
        productSnapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (data.category) {
            uniqueCategories.add(data.category);
          }
        });

        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchCategories();
  }, []);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Sobre" },
    ...categories.map((category) => ({
      to: `/category/${category}`,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <div
      className={
        isMobile
          ? "px-2 pt-2 pb-3 space-y-1 text-center sm:px-3"
          : "hidden md:flex space-x-4"
      }
    >
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`block ${
            isMobile ? "px-3 py-2 rounded-md text-base font-medium" : ""
          } hover:text-blue-200 transition duration-200 ease-in-out`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

NavLinks.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default NavLinks;
