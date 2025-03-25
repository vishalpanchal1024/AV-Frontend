import { Link, useLocation } from "react-router";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsHovered,
  setIsMobile,
  setIsMobileOpen,
} from "../Redux/Slices/Sidebar.Slice";
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { BsJournalCheck } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";
import { LuFileType, LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const location = useLocation();
  const { isExpanded, isHovered, isMobileOpen } = useSelector(
    (state) => state.Sidebar
  );
  const dispatch = useDispatch();

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      dispatch(setIsMobile(mobile));
      if (!mobile) {
        dispatch(setIsMobileOpen(false));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-500 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && dispatch(setIsHovered(true))}
      onMouseLeave={() => dispatch(setIsHovered(false))}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        } `}
      >
        <Link to="/">
          <h2 className="text-blue-500 font-bold text-xl">AI Voice Agent</h2>
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              {/* <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                Menu
              </h2> */}
              <ul className="flex flex-col gap-4">
                <li
                  key={"2"}
                  className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-500 rounded-lg"
                >
                  <Link
                    to={"/"}
                    className={`menu-item group ${
                      isActive("/") ? "menu-item-active" : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size text-blue-500 ${
                        isActive("/")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <LuLayoutDashboard />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text text-blue-500">
                        Dashboard
                      </span>
                    )}
                  </Link>
                </li>
                <li key={"3"}>
                  <Link
                    to={"/customers"}
                    className={`menu-item group ${
                      isActive("/customers")
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive("/customers")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <BsPerson />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">Customers</span>
                    )}
                  </Link>
                </li>
                <li key={"4"}>
                  <Link
                    to={"/agents"}
                    className={`menu-item group ${
                      isActive("/agents")
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive("/agents")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <BsJournalCheck />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">Agent</span>
                    )}
                  </Link>
                </li>
                <li key={"5"}>
                  <Link
                    to={"/"}
                    className={`menu-item group ${
                      isActive("/dashboard/leave-employees")
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive("/dashboard/leave-employees")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <BsPersonCircle />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">Plan & Billing</span>
                    )}
                  </Link>
                </li>
                <li key={"6"}>
                  <Link
                    to={"/appointment"}
                    className={`menu-item group ${
                      isActive("/appointment")
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive("/appointment")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <BsPersonCircle />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">Appointment</span>
                    )}
                  </Link>
                </li>
                <li key={"7"}>
                  <Link
                    to={"/system-health"}
                    className={`menu-item group ${
                      isActive("/system-health")
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive("/system-health")
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      <BsPersonCircle />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">
                        System Health OverView
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
