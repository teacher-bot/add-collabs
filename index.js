global.__base = __dirname + '/';
const configs = require('configurable');

// A plugin is a Node module that exports a function which takes a `robot` argument
module.exports = robot => {
  robot.on('issues', async context => {

    const {issue, action} = context.payload;
    const issueOwner = issue.user.login;
    const repo = context.repo({username: issueOwner});

    const config = await configs(context, './lib/defaults');


    if (action === 'opened') {
      const isCollab = await context.github.repos.checkCollaborator(repo)
        .catch(() => {
          context.github.repos.addCollaborator(repo);
        });
      const params = {
        number: issue.number,
        body: isCollab ? config.addCollaborators.existingCollaboratorMessage : config.addCollaborators.newCollaboratorMessage
      };
      /// When testing, uncomment the line below and comment the return line -- this avoids the bot getting marked as spam.
      // robot.log("This is the params", params);
      return context.github.issues.createComment(context.repo(params));
    }
  });

};
