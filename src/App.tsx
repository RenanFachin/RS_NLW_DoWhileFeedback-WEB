import { useContext } from 'react'
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from "./contexts/auth";

export function App() {

  const { user } = useContext(AuthContext) 

  return (
    <main className="max-w-7xl h-screen grid grid-cols-page gap-32 relative mx-auto">
      <MessageList />

      { Boolean(user) ? <SendMessageForm /> : <LoginBox />} 
      
    </main>
  )
}

