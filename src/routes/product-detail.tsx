import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Product } from "../types/index";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) return { product: null };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/products/${slug}`
    );
    const product: Product = await response.json();
    return { product };
  } catch (error) {
    console.error(error);
    return { product: null };
  }
}

export function ProductDetailRoute() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!product) {
    return <p>Product Not Found</p>;
  }

  return (
    <>
      <div className=" bg-black w-full h-16"></div>
      <div className="grid grid-cols-3 gap-24 py-24 px-10">
        <div className="flex gap-10 flex-col">
          <h4 className="text-3xl uppercase font-bold">{product.name}</h4>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
        <img
          src={product.imageURL}
          alt={product.name}
          width={700}
          height={700}
        />
        <div className="flex flex-col gap-5">
          <p className="font-bold text-3xl">Rp.{product.price}</p>
          <div className="grid grid-cols-3 gap-5">
            {product.sizes.map((size) => (
              <p className="py-4 border text-center" key={size}>
                {size}
              </p>
            ))}
          </div>
          <button className="bg-black text-white py-2 px-4" type="submit">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
}
