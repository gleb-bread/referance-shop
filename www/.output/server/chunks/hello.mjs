import { a as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';

const hello = defineEventHandler((event) => {
  return {
    hello: "world"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
