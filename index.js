require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");

const loadCommands = require("./src/handlers/commandHandler");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

loadCommands(client);

require("./src/events/ready")(client);
require("./src/events/interactionCreate")(client);

client.login(process.env.TOKEN);
