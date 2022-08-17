import { lazy } from "react";
const Home = lazy(() =>
    import ("../pages/home")
);
const Archives = lazy(() =>
    import ("../pages/archives")
);
const Artifacts = lazy(() =>
    import ("../pages/artifacts")
);
export const ROUTES = [
    { path: "/", Component: Home },
    { path: "home", Component: Home },
    { path: "archives", Component: Archives },
    { path: "artifacts", Component: Artifacts },
];