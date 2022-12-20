export interface Todo {
  _id: string;
  todoTitle: string;
  todoGoals: TodoGoal[];
  completed: boolean;
}

export interface TodoGoal {
  _id_todoGoal: string;
  title: string;
  deadline: number;
  done: boolean;
}
