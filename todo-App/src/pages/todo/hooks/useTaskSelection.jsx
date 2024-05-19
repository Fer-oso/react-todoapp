
import { useDispatch } from 'react-redux'
import { startSetTaskSelected } from '../../../store/todos/taskThunk';

export const useTaskSelection = () => {

    const dispatch = useDispatch();

    const onClickTaskSelected = (task) => {
    
        dispatch(startSetTaskSelected(task));
      };

  return {
    onClickTaskSelected
  };
  
}
