import { useLoaderData } from "react-router-dom";
import { User } from "../types/index";
import { cookies } from "../modules/auth";

type CartResponse = {
  message: string;
  user: User;
};

export async function loader() {
  const token = cookies.get("token");

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const cart: CartResponse = await response.json();

  return { cart };
}

export function CartRoute() {
  const { cart } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <h2>Shopping Cart</h2>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </>
  );
}
