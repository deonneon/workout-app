import React, { useState } from "react";

const equipmentOptions = [
  "Dumbbells",
  "Barbell",
  "Kettlebell",
  "Resistance Bands",
  "Pull-up Bar",
  "Jump Rope",
  "Bench",
];

interface EquipmentSelectionProps {
  onChange: (selected: string[]) => void;
}

const EquipmentSelection: React.FC<EquipmentSelectionProps> = ({
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (item: string) => {
    const newSelected = selected.includes(item)
      ? selected.filter((e) => e !== item)
      : [...selected, item];
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {equipmentOptions.map((option) => (
        <button
          key={option}
          className={`p-2 border rounded ${
            selected.includes(option) ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default EquipmentSelection;
