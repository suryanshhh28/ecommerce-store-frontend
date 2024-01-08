import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/Loader";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";

const Home = () => {
  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) {
      return toast.error("Out of stock");
    }
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  if (isError) toast.error("Cannot fetch the products");

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products{" "}
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              productId={product._id}
              handler={addToCartHandler}
              photo={product.photo}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
