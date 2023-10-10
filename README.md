# Static Export Example

This is a Next.js 13 application that will export a static HTML + CSS + JavaScript application.

## Setup

Install dependencies:

```bash
npm install
```

Running locally:

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000).

## Configuring production subpath

In production, the application should be served under a subpath as opposed to the root of the production domain.

Edit [next.config.js](./next.config.js) to configure the subpath under which the application should be served in production.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // replace "/subpath" with the desired path for the production environment
  basePath: process.env.NODE_ENV === "production" ? "/subpath" : "",
}

module.exports = nextConfig
```

## Building for production

Run the npm `build` script.

```bash
npm run build
```

This will generate a completely static build to the `./out` folder that can be served by any typical web server.
