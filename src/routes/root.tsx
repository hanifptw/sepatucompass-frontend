import { Link, Outlet } from "react-router-dom";
import { cookies } from "../modules/auth";

const token = cookies.get("token");

function logout() {
  cookies.set("token", null);
  
}

export function RootRoute() {
  return (
    <>
      <header className="fixed  w-full   ">
        <div className="flex py-5 px-10 justify-between ">
          <img src="src/img/compass.svg" alt="logo-sepatucompass" />
          <nav className="flex">
            <ul className="flex gap-5 text-white">
              <li>
                <Link to={"/"}>HOME</Link>
              </li>

              {token ? (
                <div className="flex gap-5 ">
                  <li className="">
                    <Link to={"/me"}>ACCOUNT</Link>
                  </li>
                  <li className="">
                    <Link to={"/cart"}>CART</Link>
                  </li>
                  <li  onClick={() => {logout()} }>
                    <Link  to={"/"}>LOGOUT</Link>
                  </li>
                </div>
              ) : (
                <div className="flex gap-5 ">
                  <li>
                    <Link to={"/register"}>REGISTER</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>LOGIN</Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className=" w-full bg-black py-2 text-white">
        <div className="flex my-5 mx-10 justify-between items-center">
          <img
            className=" h-3 w-auto"
            src="src/img/compass.svg"
            alt="logo-sepatucompass"
          />
          <p className="text-sm">
            Copyright &#169; 2024 Brilliant Hanif Almubarak
          </p>
        </div>
      </footer>
    </>
  );
}
