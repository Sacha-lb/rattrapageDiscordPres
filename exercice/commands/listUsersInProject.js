const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments, MySqlConnector) => {
  //message.channel.send('pong');
  let query = await MySqlConnector.executeQuery(`SELECT * FROM users WHERE projectLink = ${arguments}`)
  for (const element of query) {
    console.log(element);
    message.channel.send(element.name);
}

};

module.exports.name = 'listUsersInProject';