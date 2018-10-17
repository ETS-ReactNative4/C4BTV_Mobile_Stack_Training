# Getting Setup on Mac

## Install Node with NVM
The best way to install Node on a Mac is with Node Version Manager (NVM). NVM allows you to install multiple versions of Node making it easy to stay up to date

1.  Open a terminal and execute these two commands
```touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash```

2. Close and reopen the terminal. Then run this command to verify NVM was installed.
```nvm --version```
You should see the version number displayed.

3. You can now list all the versions of Node available for installation :
```nvm ls-remote```

4. Install the latest version, by typing:
```nvm install <version number>```
I usually pick the latest version, but last long-term support  version is always safe should be listed as 'Latest: LTS'

5. You can switch to any version you have by typing:
``nvm use <version number>```

6. To make a version your default, run this command:
```nvm alias <version number> default```

7. You can check the version of node you're running by typing :
```node -v```

## Install Python 2.7.15

1. You probably already have Python 2.7 installed.  To verify this, open a terminal, type the following and press enter.

```python --version```

2. If you don't see a version number like "Python 2.7.10"  then you'll need to install it.
Go here (https://www.python.org/downloads/mac-osx/)
Download and install the latest 2.7.X version of Python.   Version 3.X is not the same thing.  While it's okay to install 2.7 and 3 on the same machine, React Native requires 2.7 to build your project.


Install and Configure Git
1.  Download and install Git from this website : https://git-scm.com/download/mac

2. Set your name and email in Git using the following commands in the terminal.

git config --global user.name "YOUR NAME"
git config --global user.email your.email@somecompany.com


Install Android Studio
We won't be using Android Studio but installing it gives us features we need to debug our app.

1.  Go to this page: https://developer.android.com/studio/  and click the link to "Download Android Studio"

2. Launch the installer.
3. Select whether you want to import previous Android Studio settings or not, then click "OK".
4. The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components that are required for development.
Install and Configure Genymotion
use your phone, but you're probably going to want to use an emulator.

1.  Genymotion requires VirtualBox, a virtual machine engine from Oracle.  Install it by downloading it from the Virtual Box website: https://www.virtualbox.org/wiki/Downloads
Choose the download for OS X hosts and install it.



2.   You'll need to download the "free for personal use" version of Genymotion, which requires a free account.  Go to the Genymotion "Fun-Zone" login screen https://www.genymotion.com/account/login/ and choose "Create an ccccount"

When you're done creating an account, go to the main page https://www.genymotion.com/fun-zone/  and click "Download Genymotion Personal Edition"

Download the Mac OSX version and install it.


7. To be able to use the emulator with Expo you'll need to have include the path the Android Debugging Bridge (adb)  in your PATH variable.  the platform-tools which includes adb was installed when you installed Android Studio.  If you haven't done that yet, go back and install it.

echo 'export ANDROID_HOME=/Users/$USER/Library/Android/sdk' >> ~/.bash_profile
echo 'export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools' >> ~/.bash_profile

You PATH variable won't update until you restart your terminal app.  Alternatively, you can "source" your bash file with this command:

source ~/.bash_profile




10. Next configure Genymotion to use the same adb that added to your path.    Click the "Settings" button to open the settings dialog select the "ADB" tab.

11. select the "Use custom Android SDK tools" and enter the path to the Andriod sdk folder.  If you installed android studio locally, the path should be "/Users/<your username./Library/Android/sdk''.  The Library folder may be hidden you might have to type the path into the box instead of using 'Browse'

8. Now we need to add an emulator (virtual device).    Download a virtual device by launching Genymotion and clicking the "Add" button.

9. Selecting a virtual device (Google Pixel is a good choice)  and click the "Next" button. You'll be prompted to rename the device if you so choose.


10. Test your installation by choosing the virtual device you just installed and click the "Start" button.  Your emulator should start.

Create an Apple Developer Account
Creating an Apple developer account
1. Visit developer.apple.com
2. Click Member Center.
3. Sign in with your Apple ID.
If you already have an Apple ID, you’ll just need to agree to Apple’s Developer Agreement to turn it into a free developer account. Type in your Apple ID and click Sign In.
If you don’t already have an Apple ID, you’ll need to create one first. Click Create Apple ID, and fill out the required information and click Continue. You’ll then need to sign in with the Apple ID that you just created, and go back to the Member Center.

4.  On the Apple Developer Agreement page, click the first check box to accept the agreement and click the Submit button.

Your Apple ID now works as a free developer account.   You will not be able to submit apps to the App Store, or download iOS, OS X, watchOS, or tvOS developer betas. A $99/year paid developer account is still required to enjoy those privileges.
Install XCode
To run the iPhone simulator you'll have to have a Mac with XCode installed..

1. Download XCode from the Mac App Store https://itunes.apple.com/us/app/xcode/id497799835?mt=12&ign-mpt=uo%3D4.
This will take several minutes as it is a large application.

2. Launch Xcode
3. Click Xcode → Preferences → Accounts and click the ‘+’ sign and choose Add Apple ID.
4: Login with the Apple ID that you just enabled with free developer privileges.
You can now use Xcode to sideload apps on your favorite platforms. This tutorial can also be used in concert with our Apple TV 4 jailbreak tutorial.
This is a basic tutorial that will be referenced in future tutorials involving sideloading on the Apple TV, iPhone, and iPad. Stay tuned for additional discussion regarding sideloading apps.
Install Firebase Tools
Before you can use the Firebase tools you'll need a free account.  Go to the Firebase website, https://firebase.google.com, and click the "Sign In" button.  You'll be given the options of signing in or creating a new account.




1.  Now that you have a free Google Developers account install Firebase Tools :

npm install -g firebase-tools


Install Expo

Before you can use Expo you need to sign up for a free account.  You'll need the account to publish your app to the Expo repository.

Go to http://expo.io and click the "Create an account" button.



1.  While you should have an Android emulator, there's no substitute for debugging on a real phone.  To do this you'll need to install the Expo Client app on your iOS or Android phone.  Search for it in your app store and install it.

2.  Now that you have an account and your phone is all set, install the expo development tools on your computer.

npm install expo-cli --global


Taking Your New Development Environment for a Spin

