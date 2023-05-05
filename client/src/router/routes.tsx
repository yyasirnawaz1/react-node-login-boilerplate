import { lazy } from "react";
const Index = lazy(() => import("../pages/Dashboard/Index"));
const LoginCover = lazy(() => import("../pages/Authentication/Login"));
const Register = lazy(() => import("../pages/Authentication/Register"));
const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset"));
const LockScreen = lazy(() => import("../pages/Authentication/LockScreen"));
const LocalAuthority = lazy(() => import("../pages/LocalAuthority/Index"));
const Room = lazy(() => import("../pages/Room/Index"));
const SocialWorker = lazy(() => import("../pages/SocialWorker/Index"));
const SocialWorkerDepartment = lazy(() => import("../pages/SocialWorkerDepartment/Index"));
const Resident = lazy(() => import("../pages/Resident/Index"));
const ArchivedResident = lazy(() => import("../pages/ArchivedResident/Index"));
const Rate = lazy(() => import("../pages/Rate/Index"));
const User = lazy(() => import("../pages/User/Index"));
const Audit = lazy(() => import("../pages/Audit/Index"));
const AdditionalRate = lazy(() => import("../pages/AdditionalRate/Index"));
const Title = lazy(() => import("../pages/Title/Index"));
const Error = lazy(() => import("../components/Error"));

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth/login",
    element: <LoginCover />,
    layout: "blank",
  },
  {
    path: "/auth/register",
    element: <Register />,
    layout: "blank",
  },
  {
    path: "/auth/lock-screen",
    element: <LockScreen />,
    layout: "blank",
  },
  {
    path: "/auth/password-reset",
    element: <PasswordReset />,
    layout: "blank",
  },
  {
    path: "/local-authority",
    element: <LocalAuthority />,
  },
  {
    path: "/resident",
    element: <Resident />,
  },
  {
    path: "/archived-resident",
    element: <ArchivedResident />,
  },
  {
    path: "/rate",
    element: <Rate />,
  },
  {
    path: "/additional-charge",
    element: <AdditionalRate />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/audit",
    element: <Audit />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/social-worker",
    element: <SocialWorker />,
  },
  {
    path: "/social-worker-department",
    element: <SocialWorkerDepartment />,
  },
  {
    path: "/title",
    element: <Title />,
  },
  {
    path: "*",
    element: <Error />,
    layout: "blank",
  },
];

const anonymousRoute = [
  {
    path: "/",
    element: <LoginCover />,
    layout: "blank",
  },

  // reset password link
  // forgot password link
  {
    path: "*",
    element: <LoginCover />,
    layout: "blank",
  },
];

export { routes, anonymousRoute };
