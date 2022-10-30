#!/bin/sh
echo '{"name": "hoge"}' | evans --proto greeter.proto -p 50051 cli call helloworld.Greeter.SayHello
echo '{"name": "hoge"}' | evans --proto greeter.proto -p 50051 cli call helloworld.Greeter.ShoutHello
