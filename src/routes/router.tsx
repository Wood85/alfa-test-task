import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import ErrorPage from "./../ErrorPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CreateProductPage from "../pages/CreateProductPage/CreateProductPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Route>
      <Route path="/create-product" element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route index element={<CreateProductPage />} />
      </Route>
    </>
  )
);
