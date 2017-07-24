# Add issue openers as collaborators

This [Probot](https://github.com/probot/probot/) [plugin](https://github.com/probot/probot/#plugins) automatically adds individuals that open a new issue as collaborators in your repository.

### Get Started

1. Install this app
1. You're done! But you can also customize the responses.

### Customized Responses

You can use the [default responses](lib/defaults.js), but if you'd like to specify your own, create a file inside a `.github` folder, titled `teacherbot.yml` and include the following text:

```yml
addCollaborators:
  newCollaboratorMessage: "This message will appear when someone opens a new issue, and is not already a collaborator."
  existingCollaboratorMessage: "This message appears when someone is already a collaborator and they open a new issue."
```

### But why?

Perhaps you want people to be able to add labels to their own newly created issues, or you want your users to automatically become collaborators as part of a [tutorial or self-paced course](https://services.github.com/on-demand/intro-to-github/join-class-repository). The possibilities are endless.

### Features

- Responds to newly opened issues.
- Allows for customized responses.
- Grants individuals collaborator access upon the creation of an issue.

### Getting Help and Contributing

Just open a new issue in this repo if you find a bug, have a suggestion, or would like to chat about contributing. We also welcome pull requests.

# Made with :heart: by :octocat:s and friends

This Probot plugin is made by the friendly :octocat:s from GitHub Professional Services with help from the open source community. This plugin is an extension of the paid engagements that we provide to companies large and small. If you are intersted in how GitHub Professional Services can help you and your team or organization, [contact us](https://services.github.com/contact/).

For information regarding the different engagements we provide, please refer to the [Services](https://services.github.com/) web site.
