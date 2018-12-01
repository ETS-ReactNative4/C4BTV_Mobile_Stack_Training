## View, Text and Button Components

This is a new app, so let's start from scratch.  

create a folder where you want to keep your code and then create a new app called avocado.

```bash
expo init avocado
```

Choose the 'blank' template when prompted.

Next, cd into the app and initialize a Git repository.

```bash
cd avocado
git init
```

We'll need three images for this app: the avocado, a splash screen, and a icon.  [You can download them here](../code-samples/avocado/assets/).  Drop them into you assets folder, replacing anything that's already there. 

Now go to GitHub and create a repository called "avocado."  Get the URL and issues the this command substituting your URL.

```bash
git add -A
git commit -m "first commit"
git remote add origin https://github.com/codeforbtv/avocado.git
git push -u origin master
``` 

Woot! now that our project is setup, lets create an awesome app.

Start by launching the app, 

```bash
expo start
```

Open the app in your phone, or favorite emulator.  You should see this:
![alt](./assets/01/new-app.png 'new app screen')


Now we're ready to start coding.  Launch Visual Studio Code, click File -> Open and select your avocado folder. Your Project should now appear in the Explorer window.  Open the App.js file.

![Alt](./assets/01/VSC.png "Your Project")


Let's start by changing the text.  We only have one Text tag, but we'll need 3.  Change this:


    <Text>Open up App.js to start working on your app!</Text>


to this:

    <Text>I have eaten</Text>
    <Text>0</Text>
    <Text>Avocados</Text>

The render method should now look like this: 

  ```jsx
  render() {
    return (
      <View style={styles.container}>
        <Image source={avocado} style={styles.avocado}/>
        <Text>I have eaten</Text>
        <Text style={{fontSize: 60}}>{this.state.avocadoCount}</Text>
        <Text style={{marginBottom: 20}}>Avocados</Text>
         <Button onPress={this._eatAnAvocado} title='I ate an avocado!'/>
      </View>
    );
  }
`
Your app should now look like this:

![alt](assets/01/text-only.png 'text in app')


Our app only has text. Let's add an image.  For that we'll need an image control.  Before we can use a control, we need to import it.  All the controls we need for this app are provided in the React Native library, so we'll import our control from there.

Change  the import statement at the top of the file from this :

```import { StyleSheet, Text, View } from 'react-native';```

to this 

```import { StyleSheet, Text, View, Image } from 'react-native';```

Our image control is now available. Let's use it.




