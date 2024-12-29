import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import ErrorPage from "./../error-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout/>} errorElement={<ErrorPage/>}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/products/:id" element={<div>Products15</div>} />
      </Route>
			<Route path="/create-product" element={<AppLayout/>} errorElement={<ErrorPage/>} >
			  <Route index element={<div>Create</div>} />
			</Route>
    </ >,
  ),
);