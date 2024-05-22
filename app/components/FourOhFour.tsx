import { Links, Meta, Scripts } from "@remix-run/react";

export function FourOhFour() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Add your custom 404 page here */}
        <p>404 - Not Found</p>
        <Scripts />
      </body>
    </html>
  );
}
