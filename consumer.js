const amqp = require("amqplib");

async function connect() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue("jobs");

    channel.consume("jobs", (message) => {
      const input = JSON.parse(message.content);
      console.log("Received job successfully with input: " + input.number);

      const acknowledgeCondition = input.number == 7;

      if (acknowledgeCondition) {
        channel.ack(message);
      }
    });

    console.log("Waiting for messages..");
  } catch (error) {
    log.error(error);
  }
}

connect();
