import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from '../app.json';
import App from './index';


export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);