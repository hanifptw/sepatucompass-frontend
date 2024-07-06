import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import { User } from "../types";

type RegisteredResponse = {
  message: string;
  newUser: Pick<User, "username">;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const registerResponse: RegisteredResponse = await response.json();

  if (!registerResponse) {
    return null;
  }

  return redirect("/login");
};

export function RegisterRoute() {
  return (
    <main className="flex justify-center ">
      <img
        className="w-full"
        src="/images/bg-sepatucompass.webp"
        alt="Background"
      />
      <div className="absolute bg-white flex flex-col max-w-sm items-center p-10 my-24">
        <h1 className="pb-7 font-bold uppercase text-2xl">Register</h1>

        <Form className="flex gap-5 flex-col" method="post">
          <div className=" flex justify-between gap-10">
            <label className="" htmlFor="username">
              Username
            </label>
            <input
              className="border-b border-black"
              id="username"
              type="text"
              required
              name="username"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="email">Email</label>
            <input
              className="border-b border-black"
              id="email"
              type="email"
              required
              name="email"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="password">Password</label>
            <input
              className="border-b border-black"
              id="password"
              type="password"
              required
              name="password"
            />
          </div>
          <button className="bg-black text-white py-2 px-4 mt-6" type="submit">
            Register
          </button>
        </Form>
      </div>
    </main>
  );
}
