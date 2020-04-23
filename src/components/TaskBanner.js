import React from "react";

export const TaskBanner = props => (
  <div className="bg-success text-white text-center p-4">
    <h4>
      {props.userName}'s {''}
      Tasks App ({props.taskItems.filter(t => !t.done).length}{" "} tasks to do)
  </h4>
  </div>

);

