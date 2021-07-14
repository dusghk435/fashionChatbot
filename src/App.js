import logo from './logo.svg';
import './App.css';
import {Chatbot} from 'react-chatbot-kit'

import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';

function App() {
  return (
    <div className="App">
      <div>
        <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser = {MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
