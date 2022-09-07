const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments, MySqlConnector) => {

    
   //const [query] = await MySqlConnector.executeQuery(`INSERT INTO projects (name) VALUES ( ${arguments} )`)
   await MySqlConnector.executeQuery('INSERT INTO projects (name) VALUES (' + "'" +arguments[0] + "'" + ')');
    message.channel.send(`Projet inséré`);
};

module.exports.name = 'insertProject';