# Add issue openers as collaborators

This [Probot](https://github.com/probot/probot/) [plugin](https://github.com/probot/probot/#plugins) automatically adds individuals that open a new issue as collaborators in your repository.

![add-collabs](https://user-images.githubusercontent.com/9950121/28890301-9e90bd46-7794-11e7-851f-456043ba665d.gif)

### But why?

Perhaps you want people to be able to add labels to their own newly created issues, or you want your users to automatically become collaborators as part of a [tutorial or self-paced course](https://services.github.com/on-demand/intro-to-github/join-class-repository). The possibilities are endless.

### Features

- Responds to newly opened issues.
- Allows for customized responses.
- Grants individuals collaborator access upon the creation of an issue.

### Get Started

1. Install this app
1. You're done! But you can also customize the responses.

### Configuring Customized Responses

You can use the [default responses](https://github.com/teacher-bot/teacherbot/blob/master/index.js), but if you'd like to specify your own, create a file inside a `.github` folder, titled `teacherbot.yml` and include the following text:

```yml
addCollaborators:
  newCollaboratorMessage: "This message will appear when someone opens a new issue, and is not already a collaborator."
  existingCollaboratorMessage: "This message appears when someone is already a collaborator and they open a new issue."
```

### Running your own instance of this app

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this plugin.

### Getting Help and Contributing

Just open a new issue in this repo if you find a bug, have a suggestion, or would like to chat about contributing. We also welcome pull requests.

# Made with :heart: by :octocat:s and friends

This Probot plugin is made by the friendly :octocat:s from [GitHub Professional Services](https://services.github.com) with help from the open source community. This plugin is used during the training engagements that we provide.
