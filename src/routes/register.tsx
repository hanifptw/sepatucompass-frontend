import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import { User } from "../types";

type RegisteredResponse ={
    message: string;
    newUser: Pick<User,"username">
}

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
    <main>
      <h1>Register</h1>

      <Form method="post">
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" required name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required name="password" />
        </div>
        <button type="submit">Register New User</button>
      </Form>
    </main>
  );
}
