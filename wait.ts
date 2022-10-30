import { delay } from "https://deno.land/std@0.161.0/async/mod.ts";

console.log("start");
console.log(new Date());
await new Promise((resolve) => setTimeout(resolve, 1000));
console.log(new Date());
await delay(1000);
console.log(new Date());
