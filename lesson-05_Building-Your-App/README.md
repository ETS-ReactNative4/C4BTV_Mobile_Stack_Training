# Lesson Five: Building your App (10 min)
1. [Building Android](01_Building-Android.md)
2. [Building iOS](02_Building-iOS.md)

Running your app in the Expo client is cool, but we want to run our apps natively. One of React Native's best features is the ability to build both Android and iOS apps using a single code-base.   The proceedure is a little different for Android and iOS so we'll learn how to do each seperately.

Before you build, you will need to create a **free Expo account**.  If you haven't already, do that [here](https://expo.io/signup).   If you try to build without an account, you'll be asked to create one.


## Running Windows?
Windows users must **enable WSL** (Windows Subsystem for Linux). To do this, open a PowerShell terminal as an Administrator :

1) Click the Windows button in your task-bar.
2) Type `powershell`
3) Right-click the 'Windows PowerShell' icon and select 'Run as Administrator'
4) Choose 'Yes' when prompted to allow PowerShell to make changes to your sytem.

In the PowerShell window, run this command `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`

You will be promted to reboot your computer.

Now you need to install a Linux Distro.  You can do this three different ways:

### Install Linux via the Microsoft Store

1) CLIck the 'Windows' button in the task-bar and type 'store.'
2) Open the Microsoft Store and search for 'Linux.'
3) Select a distro. (We recommend Ubuntu)
![Alt](assets/microsfot-store.PNG "Microsoft Store")
    
    
### Install Linux via PowerShell

1) Open PowerShell
2) Run `Invoke-WebRequest -Uri https://aka.ms/wsl-ubuntu-1604 -OutFile Ubuntu.appx -UseBasicParsing`


### Install Linux via PowerShell

1) Click [here](https://aka.ms/wsl-ubuntu-1804) to download the Ubuntu app.
2) Double-click the download.
3) You will be prompted to install Ubuntu 18.04
 ![Alt](assets/install-ubuntu.PNG "Install Ubuntu")
