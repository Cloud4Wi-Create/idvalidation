# Cloud4Wi MyApps boilerplate to verify a customer id to grant internet access
This is a simple app to ask for a valid identifier during the Access Journey (such as a ticket number of a loyaty id) to let the user go online.
You can clone this project and customize it or use the Heroku button below to deploy on your Heroku account.



## Prerequisites for Heroku setup
+ Heroku CLI
+ Node.js
+ express-generator


## Installation & Run on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


```sh
# Remove .git folder and start again
rm -rf .git

# Start a new repo
git init

# Create Heroku App
heroku create myApp

# Install dependencies
npm install

#Add repo files
git add .

# Commit changes
git commit -m 'Initial commit'

#Push Boilerplate to Heroku
git push heroku master

#Open Heroku App
heroku open

```

