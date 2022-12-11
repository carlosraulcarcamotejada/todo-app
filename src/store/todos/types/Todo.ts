export type Todo = {
  _id: string;
  todoTitle: string;
  todoGoals: TodoGoal[];
  completed: boolean;
};

export type TodoGoal = {
  _id_todoGoal: string;
  title: string;
  deadline: number;
  done: boolean;
};
