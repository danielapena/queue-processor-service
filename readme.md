# Queue Publisher and Consumer clients

Basic client and consumer implementations using NodeJS and RabbitMQ.

## Pre-requisites

- [Node](https://nodejs.org/es)
- A [RabbitMQ](https://www.rabbitmq.com) server running
  - You can create one inside a [docker](https://www.docker.com) container using `docker run --name rabbitmq -p 5672:5672 rabbitmq`

## Commands

- `npm run publish {number}` where `{number} will be the a number that represents the message content stored in the queue
- `npm run consume` will process the queue and acknowledge the message
