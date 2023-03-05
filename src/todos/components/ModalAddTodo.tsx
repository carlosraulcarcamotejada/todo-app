import { FC } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Formik, FieldArray, Form, FormikTouched, FormikState } from "formik";
import { TextField } from "../../components";
import { useAuthStore, useTodosStore } from "../../hooks";
import * as Yup from "yup";
import { Todo, TodoGoal } from "../../store/todos/interfaces";
import { HeaderModal } from ".";
import { AnimatePresence, motion } from "framer-motion";

export const ModalAddTodo: FC<{ functionToCloseModal: Function }> = ({
  functionToCloseModal,
}): JSX.Element => {
  const { user } = useAuthStore();
  const { startAddingNewTodo } = useTodosStore();

  const initialValues: Todo = {
    todoTitle: "Aprender Give it away",
    completed: false,
    _id_user: user._id.toString(),
    todoGoals: [
      {
        deadline: 859439203,
        done: false,
        title: "Aprender intro",
      },
      {
        deadline: 859439203,
        done: false,
        title: "Aprender chorus",
      },
      {
        deadline: 859439203,
        done: false,
        title: "Aprender solo",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    todoTitle: Yup.string().min(3).max(20).required(),
  });

  //=================== onSubmit Function ========================//
  const onSubmit = async (
    formValues: Todo,
    resetForm: (nextState?: Partial<FormikState<Todo>> | undefined) => void
  ) => {
    startAddingNewTodo(formValues);
    resetForm();
    functionToCloseModal(false);
  };

  return (
    <div className="z-10">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
      >
        {({ values, handleBlur, handleChange, touched }) => (
          <Form>
            {/* Header modal */}
            <HeaderModal
              onCancel="Cancel"
              onDone="Save"
              title="New Todo"
              functionToCloseModal={functionToCloseModal}
            />
            <div className="flex flex-col justify-start items-center p-8 ">
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
    </div>
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
        <div className="flex flex-col mb-12 w-full">
          <TodoGoalTitle title="Todo Goals:" />

          <AnimatePresence>
            {todoGoals.map((todoGoal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center my-2"
              >
                <p className="text-neutral-700 dark:text-neutral-400 font-thin text-lg mr-1">
                  {index + 1}.
                </p>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={`todoGoals.${index}.title`}
                  placeholder="Todo goal"
                  value={todoGoal.title}
                  className={`focus:shadow-sm transition-none dark:focus:shadow-none 
                           dark:bg-neutral-700 dark:text-neutral-200
                            shadow-sm rounded-lg h-10  placeholder:text-neutral-400 
                            pl-2 focus:outline-0 active:outline-none ${index > 0 ? 'w-64': 'w-72'} `}
                />
                {index > 0 && (
                  <button
                    className={`active:scale-95 active:bg-neutral-300 active:dark:bg-neutral-800 transition-all duration-100 
                          rounded-lg ml-1 h-10 w-10 dark:bg-neutral-800 bg-neutral-200 flex items-center justify-center 
                           shadow-sm focus:outline-none`}
                    onClick={() => remove(index)}
                    type="button"
                  >
                    <XMarkIcon className="dark:text-neutral-300 text-neutral-400 h-5 w-5" />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <AddNewTodoGoalButton push={push} />
        </div>
      )}
    </FieldArray>
  );
};

const AddNewTodoGoalButton: FC<{ push: (obj: any) => void }> = ({
  push,
}): JSX.Element => {
  return (
    <div className="w-full bottom-0 left-0 mb-4">
      <button
        onClick={() => {
          const todoGoal: TodoGoal = {
            deadline: 859439203,
            done: false,
            title: "",
          };
          push(todoGoal);
        }}
        className="rounded-lg w-full bg-teal-500 h-12  px-3 shadow-md active:bg-teal-600 mt-8
                active:scale-95 transition-all duration-100 text-neutral-100 focus:outline-none
                flex active:dark:text-neutral-300 justify-center items-center"
        type="button"
      >
        <PlusIcon className="h-5 w-5 mr-1" />
        <p className="font-medium">Add Todo Goal</p>
      </button>
    </div>
  );
};

const TodoGoalTitle: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <p className="text-3xl text-neutral-400 dark:text-neutral-400 text-center mb-4">
      {title}
    </p>
  );
};
