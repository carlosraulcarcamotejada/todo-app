import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Formik, FieldArray, Form, Field, FormikTouched } from "formik";
import { FC } from "react";
import { TextField } from "../../components";
import { useAuthStore, useTodosStore } from "../../hooks";
import { HeaderModal } from "./Modal";
import * as Yup from "yup";
import { Todo, TodoGoal } from "../../store/todos/interfaces";

export const ModalAddTodo: FC<{ functionToCloseModal: Function }> = ({
  functionToCloseModal,
}): JSX.Element => {
  const { user } = useAuthStore();
  const { startAddingNewTodo } = useTodosStore();

  const initialValues: Todo = {
    todoTitle: "",
    completed: false,
    _id_user: user._id.toString(),
    todoGoals: [
      {
        deadline: 859439203,
        done: false,
        title: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    todoTitle: Yup.string().min(3).max(20).required(),
  });

  //=================== onSubmit Function ========================//
  const onSubmit = (formValues: Todo) => {
    startAddingNewTodo(formValues);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleBlur, handleChange, touched }) => (
        <Form>
          {/* Header modal */}
          <HeaderModal
            onCancel="Cancel"
            onDone="Save"
            title="New Todo"
            functionToCloseModal={functionToCloseModal}
          />
          <div className="flex flex-col justify-start items-center mt-8 mx-6">
            <TextField
              handleBlur={handleBlur}
              handleChange={handleChange}
              nameTextField="todoTitle"
              placeholder="Todo Title"
              touchedTextField={touched.todoTitle}
              valueTextField={values.todoTitle}
              className="focus:shadow-sm transition-none dark:focus:shadow-none"
            />

            <TodoGoalsArray
              todoGoals={values.todoGoals}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

const TodoGoalsArray: FC<{
  todoGoals: TodoGoal[];
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  touched: FormikTouched<Todo>;
}> = ({ todoGoals, handleBlur, handleChange, touched }): JSX.Element => {
  return (
    <FieldArray name="todoGoals">
      {({ push, remove }) => (
        <>
          <TodoGoalTitle title="Goals:" />
          {todoGoals.map((todoGoal, index) => (
            <div className="flex justify-center items-center my-2" key={index}>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name={`todoGoals.${index}.title`}
                placeholder="Todo goal"
                value={todoGoal.title}
                className="focus:shadow-sm transition-none dark:focus:shadow-none dark:bg-neutral-700 dark:text-neutral-200
                shadow-sm rounded-lg h-10 w-60 placeholder:text-neutral-400 pl-2 focus:outline-0 active:outline-none"
              />
              <button
                className={`active:scale-95 active:bg-neutral-300 active:dark:bg-neutral-800 transition-all duration-100 
                          rounded-lg ml-1 h-10 w-10 dark:bg-neutral-800 bg-neutral-200 flex items-center justify-center 
                           shadow-sm focus:outline-none`}
                onClick={() => remove(index)}
                type="button"
              >
                <XMarkIcon className="dark:text-neutral-300 text-neutral-400 h-5 w-5" />
              </button>
            </div>
          ))}
          <AddNewTodoGoalButton push={push} />
        </>
      )}
    </FieldArray>
  );
};

const AddNewTodoGoalButton: FC<{ push: (obj: any) => void }> = ({
  push,
}): JSX.Element => {
  return (
    <button
      onClick={() => {
        const todoGoal: TodoGoal = {
          deadline: 859439203,
          done: false,
          title: "",
        };
        push(todoGoal);
      }}
      className="rounded-lg bg-teal-500 h-8 px-3 shadow-md active:bg-teal-600 mt-8
                active:scale-95 transition-all duration-100 text-neutral-100 focus:outline-none
                flex active:dark:text-neutral-300 justify-between items-center"
      type="button"
    >
      <PlusIcon className="h-5 w-5 mr-1" />
      <p className="font-medium">Add Todo Goal</p>
    </button>
  );
};

const TodoGoalTitle: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <p className="text-3xl text-neutral-400 dark:text-neutral-400 text-center mb-4">
      {title}
    </p>
  );
};
