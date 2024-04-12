import { Clock } from "./clock";
import { ShowGitHubUser } from "./ShowGitHubUser";
import { NewGitHubUsers } from "./NewGitHubUsers";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    
    <div>
      <h3>Title</h3>
      <Clock />
      
      <NewGitHubUsers />
      <Routes>
      <Route path={"users/:username"} element={<ShowGitHubUser/>}/>
    </Routes>
    </div>
    
  );
}
