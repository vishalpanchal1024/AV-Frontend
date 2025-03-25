import { Outlet } from "react-router-dom";
// import { useRefreshTokenMutation } from "../Services/Auth.Service";
// import { setLogedInUser } from "../Redux/Slices/LogedInUserSlice";

const ProtectedRoute = () => {
  //   const logedInUser = useSelector((state) => state.LogedInUser);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const [refresh, { isLoading, isError, error }] = useRefreshTokenMutation();

  //   useEffect(() => {
  //     const { accessToken, refreshToken } = logedInUser;
  //     if (
  //       accessToken === "" ||
  //       accessToken === undefined ||
  //       accessToken === null
  //     ) {
  //       if (refreshToken !== "") {
  //         refresh(refreshToken).then(({ data, error }) => {
  //           if (data) {
  //             const response = data;

  //             if (response.isSuccess) {
  //               dispatch(setLogedInUser(response.data));
  //             } else {
  //               navigate("/SignUp", { replace: true });
  //             }
  //           }
  //           if (error) {
  //             console.log(`Error ${error.data}`);
  //           }
  //         });
  //       } else {
  //         navigate("/SignUp", { replace: true });
  //       }
  //     }
  //   }, [logedInUser]);

  //   if (role !== undefined) {
  //     if (!logedInUser.roles?.includes(role)) {
  //       navigate("/", { replace: true });
  //     }
  //   }

  //   if (isLoading) return <Loader />;

  //   if (isError) {
  //     console.log(error);
  //     return <Navigate to="/SignUp" replace={true} />;
  //   }

  return <Outlet />;
};
export default ProtectedRoute;
