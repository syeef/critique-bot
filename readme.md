# Critique

A Google Chat bot that every week will randomly group the various design team members into groups of 3 and alert them to organise a crituqe session to openly discuss current works in progress and train our critique muscles.

## Contributing

If you're a new member to the design team, we would love for you to take part in these critique sessions. We would also love you to be able to contribute to our codebase and add yourself to this tool. Follow the instreuctions below on how to get started.

### Adding yourself

- Send a message to Sam Mason to ask for your Google chat user id
- Go to the [main.js](https://github.com/cloudflare-design/critique-bot/blob/master/main.js) file
- Click on the edit button (depicted as a pencil in the top right) and on `line 9` you should see something like this

```
const people = [
  ...
]
```

- Just before the `]` character copy and paster the following code with the user id you got from Sam earlier

```javascript
// Your name here
{
  id: "Your user id goes here"
}
```

- At the bottom of the page there is a box that says "Commit changes", add in a descriptive message about what change you have made e.g Added my id to the list of people
- Then click the "Commit changes" button, this creates a [Pull Request](https://help.github.com/articles/about-pull-requests/) that will give the maintainers an opportunity to review the code change before merging it into the master branch.

Once your changes have been merged you will be alerted the next time the Critique bot runs (every Monday at 9am PST)
