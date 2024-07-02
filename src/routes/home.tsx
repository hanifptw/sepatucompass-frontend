import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../types/index";

export async function loader() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
  const products: Product[] = await response.json();

  return { products };
}

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <div>
        <img
          src="/src/img/banner-sepatucompass.webp"
          alt="banner-sepatu-compass"
        />
      </div>
      <div className="flex text-white bg-black gap-5 py-3 uppercase  ">
        <p>Sale Up To 70% + Extra 10% OFF</p>
        <p>free shipping</p>
        <p>promo period June 22th - 24th 2024</p>
      </div>
      <div className="flex items-center py-16 flex-col  w-full gap-8">
        <h2 className="text-5xl font-bold max-w-3xl uppercase text-center">
          Where <span className="underline"> Passion, Stories, </span>
          and <span className="underline"> Craftmantship </span>
          collide
        </h2>
        <button>Explore Our Product</button>
      </div>
      <ul className="flex gap-5 py-10 ">
        {products.map((product) => (
          <li key={product.id} className="snap-x">
            <Link to={`/products/${product.slug}`}>
              <div className="flex flex-col scroll-ml-6 snap-start  ">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  width={200}
                  height={200}
                />
                <h4 className="text-center">{product.name}</h4>
                <p className="text-center font-bold">Rp.{product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
