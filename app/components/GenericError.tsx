import { Links, Meta, Scripts } from "@remix-run/react";

export function GenericError({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Add your custom Generic Error page here */}
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
        <Scripts />
      </body>
    </html>
  );
}
