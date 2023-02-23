export interface Todo  {
  _id?: string;
  todoTitle: string;
  todoGoals: TodoGoal[];
  completed: boolean;
  _id_user: string;
};

export interface TodoGoal  {
  _id?: string;
  title: string;
  deadline: number;
  done: boolean;
};

export interface ToggleTodo  {
  _id: string;
  _id_todo_goal: string;
};
