import MeteoWidget from '../Meteowidget/MeteoWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <MeteoWidget city="Paris" code="75001" />
      <MeteoWidget city="Nantes" code="44000"/>
      <MeteoWidget city="Savines-le-Lac" code="05160" />
      <MeteoWidget city="Ploudalmézeau" code="29830" />
      <MeteoWidget city="Montpellier" code="34000" />
      <MeteoWidget city="Lille" code="59000" />
    </div>
  );
}

export default App;
