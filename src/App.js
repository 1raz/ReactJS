
import React, {useState} from 'react'

function App() {

  const [e, setKK] = useState(0)
  let coeff = -1;
  let num = 0;

  function complete(event)
  {
    var VALUE = document.getElementById("Продукты").value;

    var NUM = document.getElementById("Поле ввода").value;

    if(VALUE == 1)
    {
      coeff = 4;
    }
    if(VALUE == 2)
    {
      coeff = 2;
    }
    if(VALUE == 3)
    {
      coeff = 2.5;
    }
    if(VALUE == 4)
    {
      coeff = 15;
    }
    if(VALUE == 5)
    {
      coeff = 5;
    }
    setKK( NUM * coeff)
  }

  return (
    <div className="App">
      <select id="Продукты">
  <option  value="1">Картофель</option>
  <option  value="2">Баклажаны</option>
  <option  value="3">Кабачки</option>
  <option  value="4">Мясо</option>
  <option  value="5">Молоко</option>
</select>
      <input  id="Поле ввода"></input>
      <button onClick={complete}> Посчитать каллории</button>
      <h1>           {e}</h1>
    </div>
  );
}

export default App;
