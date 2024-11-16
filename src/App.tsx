import React from 'react';
import './App.css';
import Character from "./components/character/character";
import Users from "./components/users/Users";

function App() {
  return (

      <div className="Content">
          <div>
              <Character name={"Mykola"} gender={"Male"} species={"Eblan"} type={"Ykrainets"} status={"Zhenat"} image={"https://rickandmortyapi.com/api/character/avatar/76.jpeg"}/>
              <Character name={"Zhopa"} gender={"NeMale"} species={"NeEblan"} type={"NeYkrainets"} status={"NeZhenat"} image={"https://rickandmortyapi.com/api/character/avatar/76.jpeg"}/>
              <Character
                  name={'sonya'}
                  status={'zhenata'}
                  species={'abc'}
                  type={'cba'}
                  gender={'zxc'}
                  image={'#'}
              >
                  <p>jncdjcnrjvnrhjvnruvkldlscsfkvnfojvnf fsdretrbhtynhmu gfbnfhn</p>
              </Character>
              <hr/>

              <Users/>

          </div>
      </div>

  );
}

export default App;
