import React from "react";

export default function ProgressTracker({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>

      <p className="progress-text">
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text">
        {Math.round(progress)}% Completed
      </p>
    </div>
  );
}