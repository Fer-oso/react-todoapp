import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startSetStatusIntask } from "../../store/todos/taskThunk";

export const onClickChecked = (task = {}, status = "") => {

   // const dispatch = useDispatch();

    Swal.fire({
      title: `Do you want ${status} the Task?`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const taskChecked = {
          ...task,
          status,
        };

       useDispatch(startSetStatusIntask(taskChecked));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };



