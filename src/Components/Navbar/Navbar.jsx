const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mt-5 lg:mt-[54px] flex flex-col lg:flex-row">
      <div className="flex-1 mb-4 lg:mb-0">
        <a className="text-3xl font-bold">Crystal Cup</a>
      </div>
      <div className="flex-1 gap-6 text-[#150B2BB3] mb-4 lg:mb-0">
        <a>Home</a>
        <a>Recipes</a>
        <a>About</a>
        <a>Search</a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#150B2B0D] input input-bordered w-25 lg::w-auto rounded-2xl"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="" src="https://i.ibb.co/P1V0nsx/Frame-5.png" />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
      </div>
    </div>
  );
};

export default Navbar;
