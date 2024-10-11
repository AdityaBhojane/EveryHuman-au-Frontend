import { useNavigate } from "react-router-dom";
import ThemeSwitch from "../themes/ThemeSwitch";
import { useSearchStore } from "../../store/Store";


function NavigationBar() {
  const navigation = useNavigate();
  const searchValue = useSearchStore((state) => state.searchValue);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);
  const setFetchBySearch = useSearchStore((state) => state.setFetchBySearch);
  

  const navigate = useNavigate();

  return (
    <>
      <div className="flex select-none">
        <div className="navbar bg-base-100 w-[90%] m-auto">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content max-sm:min-w-24">
              <label htmlFor="my-drawer" className="flex-1">
                <a className="btn btn-ghost text-xl max-lg:text-sm max-lg:border-[#919191] rounded-xl">
                  EH Shop
                </a>
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-4">
                {/* Sidebar content here */}
                <li onClick={()=> navigation('/')} className="font-bold cursor-pointer select-none">Home</li>
                <li onClick={()=> navigation('/products')} className="font-bold cursor-pointer select-none">Store</li>
                <li onClick={()=> navigation('/OrderStatus')} className="font-bold cursor-pointer select-none">Order</li>
                <li onClick={()=> navigation('/cart')} className="font-bold cursor-pointer select-none">Cart</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 max-lg:hidden min-w-36">
            <a className="btn btn-ghost text-xl max-sm:text-sm ">EH Shop</a>
          </div>
          <ul className="gap-5 mr-10 max-lg:hidden">
                {/* Sidebar content here */}
                <li onClick={()=> navigation('/')} className="font-bold cursor-pointer select-none">Home</li>
                <li onClick={()=> navigation('/products')} className="font-bold cursor-pointer select-none">Store</li>
                <li onClick={()=> navigation('/OrderStatus')} className="font-bold cursor-pointer select-none">Order</li>
                <li onClick={()=> navigation('/cart')} className="font-bold cursor-pointer select-none">Cart</li>
              </ul>
          <div className="flex-none gap-2">
            <div className="form-control flex">
              <div className="flex items-center ">
                <input
                  onChange={(e)=> setSearchValue(e.target.value)}
                  type="text"
                  value={searchValue}
                  onKeyDown={(e)=>{
                    if(e.key == "Enter"){
                      setFetchBySearch(true);
                      navigate('/products');
                    }
                  }}
                  placeholder="Search"
                  className="input input-bordered w-60 max-sm:max-w-32 h-10 mx-4 max-md:w-50 "
                />
                <button className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    onClick={()=>{
                      console.log("first");
                      setFetchBySearch(true);
                      navigate('/products');
                    }}
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


// https://everyhuman.com.au/collections.json ( random banners)