import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";


export const useTodosStore = () => {
 
    const dispatch = useDispatch();
    const { todos } = useSelector((store: RootState) => store.todos
      );

    const startLoadTodos = () => {
        //dispatch*()
    }


    return {
        //Properties
        //Methods
        startLoadTodos
    }
}
