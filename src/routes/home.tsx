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
        <p>Sale Up To 70% + Extra 10% OFF</p>
        <p>free shipping</p>
      </div>
      <div className="flex items-center pt-16 pb-3 flex-col  w-full gap-8">
        <h2 className="leading-[4rem] text-5xl font-bold max-w-3xl uppercase text-center">
          Where <span className="underline"> Passion, Stories, </span>
          and <span className="underline"> Craftmantship </span>
          collide
        </h2>
        <button className="bg-black text-white py-2 px-4 mt-6">
          Explore Our Product
        </button>
      </div>
      <ul className="grid grid-cols-5 gap-3 pb-16">
        {products.map((product) => (
          <li key={product.id} className="">
            <div className="flex flex-col scroll-ml-6 snap-start items-center  ">
              <Link to={`/products/${product.slug}`}>
                <img
                  src={product.imageURL}
                  alt={product.name}
                  width={250}
                  height={250}
                />
                <h4 className="text-center">{product.name}</h4>
                <p className="text-center font-bold">Rp.{product.price}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
