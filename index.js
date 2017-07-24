const yaml = require('js-yaml');

// A plugin is a Node module that exports a function which takes a `robot` argument
module.exports = robot => {
  robot.on('issues', async context => {

    const {issue, action} = context.payload;
    const issueOwner = issue.user.login;
    const repo = context.repo({username: issueOwner});
    const path = '.github/teacherbot.yml';
    let config;

    try {
      const res = await context.github.repos.getContent(context.repo({path}));
      config = yaml.load(Buffer.from(res.data.content, 'base64').toString()) || {};
    } catch (err) {
      //robot.log("**** was unable to load the config file, using default");
      //robot.log(err);

      config = Object.assign( {}, require('./lib/defaults.js') || {} );
    }

    //robot.log("Config file loaded! here it is:");

    //robot.log(config);

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
