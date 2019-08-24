import axios from 'axios';

const api = axios.create({
  /**
   * ios: use an simulator can see this baseURL without extra settings
   * 
   * android: use an emulator instead. Then can't see this baseURL directly
   * Otherwise, you can use the ip of the network that the server is running
   * Genymotion's emulator: http://10.0.3.2:7777
   * Android Studio's emulator: http://10.0.2.2:7777
   * 
   * or, make a port redirection using the adb settings running the command: adb reverse tcp:7777 tcp:7777 
   */
    baseURL: 'http://localhost:7777',
});

export default api;
