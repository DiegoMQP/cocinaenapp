import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNonce,
  type ShouldRevalidateFunction,
} from '@remix-run/react';
import {Seo, ShopifySalesChannel} from '@shopify/hydrogen';
import {type LoaderFunction} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import '../src/index.css';

export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  // revalidate when a mutation is performed e.g add to cart, log in, etc.
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export const loader: LoaderFunction = async ({context}) => {
  return json({
    layout: {
      logo: 'CocinaEnApp',
      storeName: 'CocinaEnApp - Tu restaurante listo en apps de delivery',
    },
  });
};

export default function App() {
  const nonce = useNonce();

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}
