import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { onToggleModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);

  const startToggleModal = () => {
    dispatch(onToggleModal());
  };

  return {
    //Properties
    ...ui,
    //Methods
    startToggleModal,
  };
};
