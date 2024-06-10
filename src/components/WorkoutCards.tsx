import React, { useEffect, useState } from "react";
import { Workout } from "../types";
import WorkoutDetail from "./WorkoutDetail";

interface WorkoutCardsProps {
  selectedEquipment: string[];
}

const getRandomWorkoutImage = async (): Promise<string> => {
  // Append a unique query parameter to ensure a different image each time
  const response = await fetch(
    `https://picsum.photos/400/400?random=${Math.random()}`
  );
  return response.url;
};

const generateWorkouts = async (equipment: string[]): Promise<Workout[]> => {
  const workouts = await Promise.all(
    Array.from({ length: 5 }, async (_, i) => ({
      id: i,
      name: `Workout Routine ${i + 1}`,
      equipment,
      details: `Detailed description of Workout Routine ${
        i + 1
      } with ${equipment.join(", ")}.`,
      image: await getRandomWorkoutImage(),
    }))
  );
  return workouts;
};

const WorkoutCards: React.FC<WorkoutCardsProps> = ({ selectedEquipment }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const newWorkouts = await generateWorkouts(selectedEquipment);
      setWorkouts(newWorkouts);
    };
    fetchWorkouts();
  }, [selectedEquipment]);

  const handleCardClick = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Workout Routines</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-200"
            onClick={() => handleCardClick(workout)}
          >
            <img
              src={workout.image}
              alt={`Workout ${workout.id}`}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{workout.name}</h3>
            <p>{workout.equipment.join(", ")}</p>
          </div>
        ))}
      </div>
      {selectedWorkout && <WorkoutDetail workout={selectedWorkout} />}
    </div>
  );
};

export default WorkoutCards;
