import { type ErrorResponse, Links, Meta, Scripts } from "@remix-run/react";

export function RouteError({ error }: { error: ErrorResponse }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Add your custom Route Error page here */}
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <Scripts />
      </body>
    </html>
  );
}
