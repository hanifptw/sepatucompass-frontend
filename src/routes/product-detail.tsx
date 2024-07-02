import {
  ActionFunctionArgs,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
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
      <div className="flex pt-40 ">
        <div className="max-w-40">
          <h4 className="text-center">{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <img
          src={product.imageURL}
          alt={product.name}
          width={200}
          height={200}
        />
        <div>
          <p className="text-center font-bold">Rp.{product.price}</p>
          <button>add to cart</button>
        </div>
      </div>
    </>
  );
}
