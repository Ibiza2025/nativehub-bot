const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "store",

  execute(message) {
    const embed = new EmbedBuilder()
      .setColor(0x8b5cf6)
      .setTitle("🛒 NativeHub Store")
      .setDescription("Aqui estão os nossos bots disponíveis para compra:")
      .addFields(
        {
          name: "🤖 Ticket Bot Pro",
          value:
            "Sistema completo de tickets com logs, transcrições e categorias.\n💰 Preço: 5€",
          inline: false,
        },
        {
          name: "⚡ Moderation Bot",
          value:
            "Auto-mod, anti-spam, logs e sistema de punições.\n💰 Preço: 7€",
          inline: false,
        },
        {
          name: "🎮 Discord Utility Bot",
          value:
            "Comandos úteis, stats, utilidades e sistemas custom.\n💰 Preço: 4€",
          inline: false,
        },
      )
      .setFooter({ text: "NativeHub • Loja Oficial" })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
