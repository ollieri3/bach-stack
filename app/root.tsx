import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { FourOhFour } from "./components/FourOhFour";
import { RouteError } from "./components/RouteError";
import { GenericError } from "./components/GenericError";

import stylesheet from "~/tailwind.css?url";
import { CLIENT_ENV } from "~/environment.server";

export function meta() {
  return [
    /** Primary Meta Tags **/
    { title: "" },
    { name: "description", content: "" },

    /** Twitter Meta Tags **/
    { property: "twitter:title", content: "" },
    { property: "twitter:description", content: "" },
    { property: "twitter:image", content: "" },
    { property: "twitter:url", content: "" },
    { property: "twitter:card", content: "summary_large_image" },

    /** Open Graph Meta Tags **/
    { property: "og:title", content: "" },
    { property: "og:description", content: "" },
    { property: "og:url", content: "" },
    { property: "og:image", content: "" },
    { property: "og:type", content: "website" },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function loader() {
  return json({ ENV: CLIENT_ENV });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <FourOhFour />;
    } else {
      return <RouteError error={error} />;
    }
  } else if (error instanceof Error) {
    return <GenericError error={error} />;
  } else {
    return <h1>An unexpected error occurred</h1>;
  }
}
