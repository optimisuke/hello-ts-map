import { GrpcServer } from "https://deno.land/x/grpc_basic@0.4.6/server.ts";
import { Greeter, HelloReply, HelloRequest } from "./greeter.d.ts";

const port = 50051;
const server = new GrpcServer();

const protoPath = new URL("./greeter.proto", import.meta.url);
const protoFile = await Deno.readTextFile(protoPath);

class GreeterImp implements Greeter {
  async SayHello(req: HelloRequest) {
    const message = `hello ${req.name || "stranger"}`;
    return { message: message };
  }

  async *ShoutHello(req: HelloRequest) {
    for (const n of [0, 1, 2]) {
      const message = `hello ${req.name || "stranger"} #${n}`;
      yield { message: message };
    }
  }
}
const greeter = new GreeterImp();
server.addService<Greeter>(protoFile, greeter);

console.log(`gonna listen on ${port} port`);
for await (const conn of Deno.listen({ port })) {
  server.handle(conn);
}
