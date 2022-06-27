import Chat from "./Chat";
import Ws from "./Ws";

//const wsConnect = new Ws('ws://192.168.1.112:8081');
const wsConnect = new Ws('wss://ahj-chat-back.vercel.app/8081');
const chat = new Chat('chat-area', wsConnect);
wsConnect.addChat(chat);