import { useState } from "react";
import EquipmentSelection from "./components/EquipmentSelection";
import WorkoutCards from "./components/WorkoutCards";

const App = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const handleEquipmentChange = (equipment: string[]) => {
    setSelectedEquipment(equipment);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Equipment</h1>
      <EquipmentSelection onChange={handleEquipmentChange} />
      <WorkoutCards selectedEquipment={selectedEquipment} />
    </div>
  );
};

export default App;
