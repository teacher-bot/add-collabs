# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying probot plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

This plugin requires these **Permissions & events** for the GitHub App:

- Administration - **Read & Write**
- Issues - **Read & Write**
  - [x] **Issue comment** events
  - [x] **Issues** events
- Single File - **Read-only**
  - Path: `.github/teacherbot.yml`
