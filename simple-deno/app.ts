import { serve } from "https://deno.land/std/http/server.ts"; //import module from url
const s = serve({ port: 9876 });
console.log("http://localhost:9876/");
for await (const req of s) { //top-level await
  req.respond({ body: "Hello World\n" });
}
