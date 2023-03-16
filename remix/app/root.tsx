import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "~/components/UI/NavBar/NavBar";
import { ErrorPage } from "./components";
import styles from './scss/styles/index.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function Error({ error }: any) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred !</title>
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <ErrorPage error={error} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

// links(styles);
export default App;
