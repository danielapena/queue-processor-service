const amqp = require("amqplib");

const msg = { number: process.argv[2] };

async function connect() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue("jobs");
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log("Job sent successfully");
  } catch (error) {
    log.error(error);
  }
}

connect();
