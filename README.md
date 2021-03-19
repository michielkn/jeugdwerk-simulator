# Dependency's
These are the dependency's, if you want to run the program locally or change the program to push new code you need to install these.
* node https://nodejs.org/en/download/
* Firebase CLI https://firebase.google.com/docs/cli

# Install
Once the dependency's are downloaded and configured, you need to install npm in the folder you cloned the git directory. You do this by opening the command line to the folder, and type the command:
* npm install

# Run
If npm is installed the program can be runned locally, this is done by typing in the command line in the correct folder the command:
* npm run start 
* In browser: Localhost:3000

# Push online
If you want to push new code to Firebase, you need to install npm as well. If npm is installed a build must be made first. This is done with the command:
* npm run build
After this the build can be pushed, this is done with the command:
* firebase deploy (needs firebase cli)

