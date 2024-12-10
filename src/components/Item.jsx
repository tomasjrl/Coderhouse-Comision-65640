import PropTypes from "prop-types";
import ItemCount from "./ItemCount";

const Item = ({
  product,
  isCountVisible,
  handleAddToCart,
  handleCountChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.category}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {product.name}
          </h2>
          <p className="mt-2 text-gray-500">${product.price.toFixed(2)}</p>
          <p className="mt-2 text-gray-700">
            Stock disponible: {product.stock}
          </p>
          <p className="mt-2 text-gray-600">{product.description}</p>

          <div className="mt-4">
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
              visible={isCountVisible}
              onCountChange={handleCountChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isCountVisible: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleCountChange: PropTypes.func.isRequired,
};

export default Item;
