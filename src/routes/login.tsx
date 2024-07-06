import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import { cookies } from "../modules/auth";

type LoginResponse = {
  message: string;
  token: string;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const loginResponse: LoginResponse = await response.json();

  if (!loginResponse) {
    return null;
  }

  const token = loginResponse.token;

  cookies.set("token", token);

  return redirect("/me");
};

export function LoginRoute() {
  return (
    <main className="flex justify-center">
      <img className="w-full" src="/src/img/bg-sepatucompass.webp" alt="" />
      <div className="absolute bg-white flex flex-col max-w-sm items-center p-10 my-24">
        <h1 className="pb-7 font-bold uppercase text-2xl">Login</h1>

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
            Login
          </button>
        </Form>
      </div>
    </main>
  );
}
