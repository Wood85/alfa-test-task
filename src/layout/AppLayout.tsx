import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main>
      <header>Header</header>
        <Outlet />
			<footer>Footer</footer>
    </main>
  );
}