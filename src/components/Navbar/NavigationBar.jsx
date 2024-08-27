import ThemeSwitch from "../themes/ThemeSwitch";

function NavigationBar() {
  return (
    <>
      <div className="flex">
        <div className="navbar bg-base-100 w-[90%] m-auto">
          <div className="drawer sm:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content max-sm:min-w-24">
              <label htmlFor="my-drawer" className="flex-1">
                <a className="btn btn-ghost text-xl max-sm:text-sm max-sm:border-[#919191] rounded-xl">EH Shop</a>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 max-sm:hidden">
            <a className="btn btn-ghost text-xl max-sm:text-sm ">EH Shop</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control flex">
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 max-sm:w-20 h-10 mx-4 md:w-auto"
                />
                <button className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <span>SY</span>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
