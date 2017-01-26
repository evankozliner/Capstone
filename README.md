# Capstone
A financial application utilizing watson

# Before you start contributing you'll need this to work
`cd FrugalApp`

`npm install`

`nodemon app.js`

This will install all the dependencies for our express application. 

Using `nodemon` instead of `npm start` allows the server to restart itself when any of the back-end code changes (So we don't need to stop and start the server ourselves each time we make a change).

# To start the server
`npm start`

This might be changed in the future

Read over the express example app to learn more about javascript :)

## View Rendering Documentation
We're using [express-vue](https://www.npmjs.com/package/express-vue) to render our [vue.js](https://vuejs.org/) pages. 

If you want to contribute to the front-end take a look at these pages for documentation.

# Reviewing other people's branches to be sure their code works

###1. Fetch the remote branch your teammates code is on
`git fetch`

###2. Change your branch to be your teammates branch. You should be able to find its name on the Branches dropdown on the Github website or on the pull request you are viewing. 

`git checkout your-teammates-branch`
```
Branch your-teammates-branch set up to track remote branch your-teammates-branch from origin.
Switched to a new branch 'Josh-Branch'
```
You'll get a message similar to the one above when you've successfully checked out his / her branch

###3. Make sure their code is functioning
Test features, run unit test, read through the code etc.

###4. Comment on anything that isn't working on their pull request
Be sure to be specific!

###5. When everything is working, merge their pull request or wait for more of your peers to review
Don't forget to go back to the branch you were working on:

`git checkout branch-you-were-working-on-previously`

# Making a new Change / Micro Git Workflow Tutorial
So you want to make a change or add a feature! Good! Here is the workflow:

###1. Pull the latest changes down

This will ensure that you're working with the latest version of the code base. You should *always* try to do this before you start working so you don't end up using old code and needing to rewrite your work.

`git checkout master`

`git pull origin master --rebase`

Here we are going into the master branch and updating it with any changes from the remote master branch. 

Notice the `--rebase` option here. This is optional, but it can provide a cleaner commit history by not adding a commit for some trivial merges. 

It's worth noting that this will need to be done again if you change branches. 

###2. Create a branch

`git checkout -b my_new_feature` ***or*** `git branch my_new_feature` followed by `git checkout my_new_feature`

The first command is a more compact version of the two mentioned after it. Creating a new branch **copies the code from the branch you were just in**. This is why is went into the master branch *before* creating a new branch. 

By creating a new branch we have now made our change independent from the (working) master code. This seperation is to make sure that we *always have a working copy of the project*. 

###3. Make some changes

Now you can edit your files without fear that you will mess up other people's code. 

Now suppose I have been working for some time and I want to see what files I have edited. To do this I would run:

`git status`
```
On branch my_new_feature
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
```

Here we can see I have edited the README.md file.

###4. Push those changes
It's good to get feedback early and often! So I want to show off my changes for peer review. 

There are 4 stages to this process: Adding files, committing files, pushing files for review, and pulling files into master.

`git add README.md`

By adding files we specify which files will be added to our history when we commit. Not all the files we've been working on will be ready for out peers to see. To make sure we have all the files we want to commit we can run `git status` again:

```
On branch test
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   README.md

```

If you realize there's a file you have adding that you didn't want to add, you can always run `git reset filename` to un-add that file. 

Suppose we've completed a logical unit of work, like a bug fix or major part of a feature. Then we'll want to commit and show everyone else. 

`git commit -m "My cool new feature"`

Here we are saying "Yes, my work is ready to be reviewed and added to the history of the project." Commits are incredibly useful because we can roll-back the project to an old commit! To see your old commits you can do the following: 
 
`git log`

```
commit f696bf1c9fdf9dc7720eda6389922dcdcaed29f6
Author: Evan Kozliner <evankozliner@gmail.com>
Date:   Wed Jan 25 15:39:08 2017 -0500

    My cool new feature
```

By looking at the log we can see commit IDs and their associated messages. If we commit often, whenever we mess something up in our individual branches we can always roll back. This gives us a lot of flexibility to try new things. 

Now we're ready to show everyone else our feature. Lets push our local branch to the remote repository. Remember: Just because you created it locally doesn't mean it exists remotely!

`git push origin my_new_feature`

This will push our changes into our own personal remote branch.

###5. Get feedback

Now when you visit the [repository](https://github.com/evankozliner/Capstone) you'll notice that git has prompted you to pull against master. 

Create the pull request on the interface. 

Next alert your teammates that there's a pull request they should review. They'll likely have some feedback for you. You should see that feedback on Github's website under the pull-request. 

Make the changes they request locally, then repeat the process of using `git add`, `git commit -m "Changes for my teammates"`, and `git push origin my_new_feature` and the webpage displaying the changes to your teammates will update. 

Once the code looks good, one of your teammates will pull it into master using the "Merge Pull Request" button. It's not a good practice to merge them in yourself without first having someone look over them, but if the change is trivial you can do it. 

# Coming soon: Reviewing your peers changes

