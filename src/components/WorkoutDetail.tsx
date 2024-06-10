import React from "react";
import { Workout } from "../types";

interface WorkoutDetailProps {
  workout: Workout;
}

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ workout }) => {
  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-xl font-bold">{workout.name}</h3>
      <p className="mt-2">{workout.details}</p>
      <ul className="list-disc list-inside mt-2">
        {workout.equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutDetail;
