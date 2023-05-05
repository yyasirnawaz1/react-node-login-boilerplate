import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlankLayout from "../components/Layouts/BlankLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { routes, anonymousRoute } from "./routes";
import { useAccount } from "../context/AuthContext";
//TODO: use this somewhere else
// import useFetchUser from "../hooks/AuthenticationHooks";

const getRoutes = (isSuccess: string | undefined) => {
  if (isSuccess) {
    const finalRoutes = routes.map((route) => {
      return {
        ...route,
        element: route.layout === "blank" ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>,
      };
    });

    return createBrowserRouter(finalRoutes);
  } else {
    const finalRoutes = anonymousRoute.map((route) => {
      return {
        ...route,
        element: <BlankLayout>{route.element}</BlankLayout>,
      };
    });

    return createBrowserRouter(finalRoutes);
  }
};

const ApplicationRoutes = () => {
  const { token } = useAccount();

  return <RouterProvider router={getRoutes(token)} />;
};

export default ApplicationRoutes;
