# React Native coding challenge #
A demo app to track workout participants in real-time. The user can check in registered participants, and can add a new participant on the fly.

### Install and build
In the project root:
```$ yarn``` (or `$npm i`, if you prefer)
Then:
```$ react-native run-ios``` or ```$ react-native run-android```

### Notes
I did not have enough time to add real-time features with socket.io. I also did not have enough time to add unit tests. In retrospect, I would have planned these aspects before beginning any development.

Another shortcoming is the app UI's poor handling of long lists, and of content hiding behind the keyboard. I wasn't focusing on perfect UI, so I didn't get to these issues.

However, I am happy with the app's use of redux, and with its screen navigation using react-navigation.
