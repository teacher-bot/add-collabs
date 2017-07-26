const configurable = require('configurable');

/**
 * @typedef {Object} Config
 * @prop {string} existingCollaboratorMessage
 * @prop {string} newCollaboratorMessage
 *
 * Anytime a user opens an issue, add them as a collaborator to the repository.
 * @param {Object} robot
 * @param {Config} [defaults]
 * @param {string} [configFilename]
 */
module.exports = (robot, defaults = {}, configFilename = 'add-collabs.yml') => {
  robot.on('issues.opened', async context => {
    const config = await configurable(context, defaults, configFilename);

    const {issue, action} = context.payload;
    const issueOwner = issue.user.login;
    const repo = context.repo({username: issueOwner});
    const isCollab = await context.github.repos.checkCollaborator(repo)
      .catch(() => {
        context.github.repos.addCollaborator(repo);
      });
    const params = {
      number: issue.number,
      body: isCollab ? config.existingCollaboratorMessage : config.newCollaboratorMessage
    };

    /// When testing, uncomment the line below and comment the return line -- this avoids the bot getting marked as spam.
    // robot.log("This is the params", params);
    return context.github.issues.createComment(context.repo(params));
  });
};
