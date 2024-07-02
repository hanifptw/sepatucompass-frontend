import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <>
      <header className=" fixed w-full">
        <div className="flex my-5 mx-10 justify-between ">
          <img src="src/img/compass.svg" alt="logo-sepatucompass" />
          <nav className="flex">
            <ul className="flex gap-5 text-white">
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/register"}>REGISTER</Link>
              </li>
              <li>
                <Link to={"/login"}>LOGIN</Link>
              </li>
              <li>
                <Link to={"/me"}>ACCOUNT</Link>
              </li>
              <li>
                <Link to={"/cart"}>CART</Link>
              </li>
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
          <p>COPYRIGHT &#169; 2024 Brilliant Hanif Almubarak</p>
        </div>
      </footer>
    </>
  );
}
