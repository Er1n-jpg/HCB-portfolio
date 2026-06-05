import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("art", "routes/art.tsx"),
    route("design","routes/design.tsx"),
] satisfies RouteConfig;

