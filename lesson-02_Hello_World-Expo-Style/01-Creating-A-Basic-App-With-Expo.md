<!----- Conversion time: 2.095 seconds.


Using this Markdown file:

1. Cut and paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* GD2md-html version 1.0β13
* Thu Oct 25 2018 12:05:45 GMT-0700 (PDT)
* Source doc: https://docs.google.com/open?id=1jjxlOMWsGu96GVzvMKiQ1mfAP1ZTfQrbq4U_zWfuSDk
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server.
----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 3.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>


Now that you have your development environment setup, we can start building our first mobile application, "Hello World"

Start by opening up a terminal. Then create or navigate to a folder where you want to keep your projects.  



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Hello-World0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Hello-World0.png "image_tooltip")


Once  you're in the folder execute this command


```
expo init hello-world
```


You should be promoted to "Choose a template."



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Hello-World1.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Hello-World1.png "image_tooltip")


"Hello World" is a really simple app, so let's choose the default  'blank.'   Hit 'enter' to accept this as your template.  Expo will now extract the files you need and setup your app.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Hello-World2.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Hello-World2.png "image_tooltip")


We can run our app by following the instructions on the screen.  Execute these two commands:


```
cd hello-world
expo start

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


<!-- GD2md-html version 1.0β13 -->
