
import { Welcome } from "./welcome";
import { Clock } from "./clock";
import { useState } from "react";
import { GitHubUser } from './GitHubUser'
import { NewGitHubUsers } from "./NewGitHubUsers";

export function App() {
 
  return (
    <div>
   
    
       
          <h3>The exercise has be done by Lucy Lainez and Fabian Mardale</h3>

          <Clock />
     
      <GitHubUser />
      <NewGitHubUsers/>
    
      
    </div>
  );
}
