# Hello World Expo Style

Now that you have your development environment setup, we can start building our first mobile application, "Hello World"

Start by opening up a terminal. Then create or navigate to a folder where you want to keep your projects.

![alt_text](assets/Capture.PNG "image_tooltip")


Once  you're in the folder execute this command

```
expo init hello-world
```


You should be promoted to "Choose a template.

![alt_text](assets/Capture2.PNG "image_tooltip")


"Hello World" is a really simple app, so let's choose the default  'blank.'   Hit 'enter' to accept this as your template.  Expo will now extract the files you need and setup your app.

![alt_text](assets/Capture3.PNG "image_tooltip")


We can run our app by following the instructions on the screen.  Execute these two commands:

    cd hello-world
    expo start

![alt_text](assets/Capture4.PNG "image_tooltip")

You should see a UPC symbol in your terminal.  In addition, the Expo dev tools should open in a Chrome window.

![alt_text](assets/Capture5.PNG "image_tooltip")


Lets see what our app looks like.  Open Genymotion and start a virtual device.  After it finishes booting up, type 'a' in the terminal window to launch your app in the emulator.

 ![alt_text](assets/Capture8.PNG "image_tooltip")

The first time you launch your app in an emulator Expo will install the Expo client.  When this is finished you will be prompted to allow Expo to display over other apps.  CLick the toggle on and then click the back button on the right side to return to your app.

 ![alt_text](assets/Capture9.PNG "image_tooltip")

 ![alt_text](assets/Capture-10.PNG "image_tooltip")

 ![alt_text](assets/Capture-11.PNG "image_tooltip")

 ![alt_text](assets/Capture-12.PNG "image_tooltip")

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text>Hello World</Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
