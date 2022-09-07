const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments, MySqlConnector) => {

    // Même problème de syntaxe SQL, je n'arrive pas a rajouter des ' ' autour des arguments
   //const [query] = await MySqlConnector.executeQuery(`INSERT INTO users (name, projectLink) VALUES (${arguments[0]},${arguments[1]} )`)
   await MySqlConnector.executeQuery('INSERT INTO users (name, projectLink) VALUES (' + "'" +arguments[0] + "'" + ',' + "'" +arguments[1] + "'" + ')');

    message.channel.send(`User insert`);
};

module.exports.name = 'insertUser';