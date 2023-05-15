import {Post} from "./Post";
import { Header } from "./components/Header";
import "./global.css"



function App() {
  return (
    <div>
      <Header/>

      <Post author="Alice Ribeiro" content="Lorem ipsum dolor sit amet" />
    </div>
  );
}

export default App
