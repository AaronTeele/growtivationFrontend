import App from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "",
    authDomain: "growtivation-53329.firebaseapp.com",
    databaseURL: "https://growtivation-53329.firebaseio.com",
    projectId: "growtivation-53329",
    storageBucket: "growtivation-53329.appspot.com",
    messagingSenderId: "176552937456"
  };
App.initializeApp(config);

export default App