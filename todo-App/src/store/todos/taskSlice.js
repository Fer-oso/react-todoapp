import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    task: {
      id: "",
      title: "", // titulo de la tarea, ejemplo.  Crear vista para vender remeras
      description: "", //descripcion para saber de que trata la tarea y que debe realizarse
      comments: [{}], // los comentarios se van a basar en lo que dejen el/los usuario/s sobre como ve la tarea
      changes: [{}], // son comentarios en donde se van dejando los cambios realizados, es para mantenerse informados
      status: {
        comment: "",
      }, // estado de la tarea  sin tomar - tomada -iniciado - en proceso - pausa - pendiente - finalizado
      finishDate: "", // fecha estimada de finalizacion
      createAt: "",
    },
    listTasks: [{}],
  },
  reducers: {
    createTask: (state, action) => {
      state.task = action.payload;
    },

    loadTasks: (state, action) => {
      state.listTasks = action.payload;
      state.task = action.payload.task;
    },
  },
});

export const { createTask, loadTasks } = taskSlice.actions;
