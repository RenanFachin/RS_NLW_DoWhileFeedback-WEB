import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";

export function App() {
  return (
    <main className="max-w-7xl h-screen grid grid-cols-page gap-32 relative mx-auto">
      <MessageList />
      <LoginBox />
    </main>
  )
}

