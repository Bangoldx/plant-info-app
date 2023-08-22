import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import plantData from './components/plantData';
import PlantPage from './components/plantPage';

function App() {
  const [plant, setPlant] = useState(plantData);
  // const displayPlants = [...new Set(plantData.map((data) => data.id))];

  const filterByType = (currentType) => {
    const displayPlants = plantData.filter((newPlantDisplay) => {
      return newPlantDisplay.data === currentType;
    });
    setPlant(displayPlants);
  }
  return (
    <div>
      <Banner />
      <Menu
        // filterByType={filterByType}
        // setPlant={setPlant}
        // displayPlants={displayPlants}
      />
      <PlantPage plant={plant} />


    </div >
  );
}

export default App;
