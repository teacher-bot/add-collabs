// A plugin is a Node module that exports a function which takes a `robot` argument
module.exports = robot => {
  robot.on('issues', async context => {
    let config;
    const defaults = Object.assign({}, {
      addCollaborators: {
        newCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nWe\'re happy you\'re here :wave:. Everyone is welcome here, so I\'m making you a collaborator. This will give you access to commit on this repo.',
        existingCollaboratorMessage: 'Hi! I\'m the friendly :robot: of this repo.\n\nI can see that you\'re already a collaborator. Any other issues are above my paygrade at the moment, so we\'ll have to wait for a pesky hu-man. Not to worry though, they\'ll drop by within 24 hours to answer your questions!'
      }
    } || {});

    const {issue, action} = context.payload;
    const issueOwner = issue.user.login;
    const repo = context.repo({username: issueOwner});

    try {
      config = await context.config('teacherbot.yml');
    } catch (err) {
      config = defaults;
    }

    if (action === 'opened') {
      const isCollab = await context.github.repos.checkCollaborator(repo)
        .catch(() => {
          context.github.repos.addCollaborator(repo);
        });
      const params = {
        number: issue.number,
        body: isCollab ? config.addCollaborators.existingCollaboratorMessage : config.addCollaborators.newCollaboratorMessage
      };
      // / When testing, uncomment the line below and comment the return line -- this avoids the bot getting marked as spam.
      // robot.log("This is the params", params);
      return context.github.issues.createComment(context.repo(params));
    }
  });
};
