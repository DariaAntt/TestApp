import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { CatalogRouter } from "./routers/CatalogRouter";

const router = createBrowserRouter(createRoutesFromElements(CatalogRouter()));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
