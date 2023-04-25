// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[folder]/[name].tsx";
import * as $1 from "./routes/[folder]/index.tsx";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/integrations/[slug].tsx";

const manifest = {
  routes: {
    "./routes/[folder]/[name].tsx": $0,
    "./routes/[folder]/index.tsx": $1,
    "./routes/index.tsx": $2,
    "./routes/integrations/[slug].tsx": $3,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
