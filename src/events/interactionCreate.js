module.exports = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.log(err);

      await interaction.reply({
        content: "Erro ao executar comando.",
        ephemeral: true,
      });
    }
  });
};
