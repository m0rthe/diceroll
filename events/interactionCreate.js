const { Events } = require("discord.js");

module.exports = {
  // name: 'interactionCreate',
  name: Events.InteractionCreate,
  async execute(interaction) {
    //if (!interaction.isCommand()) return;
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    const command = interaction.client.commands.get(commandName);

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`);
      console.error(error);
    }
  },
};
