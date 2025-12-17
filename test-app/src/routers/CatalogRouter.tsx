import { Outlet, Route, Routes } from "react-router";
import { CatalogPage } from "../pages/CatalogPage";

export function Layout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export function CatalogRouter() {
  return (
    <Route element={<Layout />}>
      <Route path="/" element={<CatalogPage />} />
    </Route>
  );
}
