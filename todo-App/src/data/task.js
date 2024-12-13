import { dayFormater } from "../pages/utils/dayFormater";

export const generalTask = {
  id: "",
  title: "", // titulo de la tarea, ejemplo.  Crear vista para vender remeras
  description: "", //descripcion para saber de que trata la tarea y que debe realizarse
  comments: [{}], // los comentarios se van a basar en lo que dejen el/los usuario/s sobre como ve la tarea
  changes: [{}], // son comentarios en donde se van dejando los cambios realizados, es para mantenerse informados
  status: {
    state: "",
    comment: "",
  }, // estado de la tarea  sin tomar - tomada -iniciado - en proceso - pausa - pendiente - finalizado
  subTasks: [{}], // subtareas que se deben realizar para poder finalizar la tarea general
  finishDate: "", // fecha estimada de finalizacion
  createdAt: dayFormater(),
};

export const newTaskToFirebase = {
  title: "", // titulo de la tarea, ejemplo.  Crear vista para vender remeras
  description: "", //descripcion para saber de que trata la tarea y que debe realizarse
  status: "", // estado de la tarea  sin tomar - tomada -iniciado - en proceso - pausa - pendiente - finalizado
  finishDate: null, // fecha estimada de finalizacion
  createdAt: dayFormater(),
};

export const subtaskToFirebase = {
  title: "", // titulo de la tarea, ejemplo.  Crear vista para vender remeras
  description: "", //descripcion para saber de que trata la tarea y que debe realizarse
  comments: [], // los comentarios se van a basar en lo que dejen el/los usuario/s sobre como ve la tarea
  changes: [], // son comentarios en donde se van dejando los cambios realizados, es para mantenerse informados
  status: null, // estado de la tarea  sin tomar - tomada -iniciado - en proceso - pausa - pendiente - finalizado
  finishDate: null, // fecha estimada de finalizacion
  createdAt: dayFormater(),
};

export const comments = {
  date: dayFormater(),
  comment: {},
  severity: "",
};

export const changes = {
  user: "",
  date: dayFormater(),
  text: "",
  images: [],
};

export const generalForm = {
  user: "",
  date: dayFormater(),
  text: "",
};

export const taskWithData = {
  enabled: false,
  checked: "default",
  id: "",
  title: "Change list About view",
  description: "",
  comments: [
    {
      date: " Day 15-3-03-2024",
      comment: [
        {
          severity: "success",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "success",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },

        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "error",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },
      ],
    },

    {
      week: "1",
      date: "Day 12-03-2024",
      comment: [
        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "error",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },

        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "warning",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },
      ],
    },
  ],
  changes: [
    {
      user: "",
      comment: {
        date: "12-3-24 / 20:03",
        text: "Se realizo el cambio en el header, ya no tiene puntas redondeadas donde deben ser rectangulares ",
      },
    },
    {
      user: "",
      comment: {
        date: "11-3-24 / 20:03",
        text: "Se realizo el cambio necesario en el NavBar para que se pueda navegar correctamente ",
      },
    },
    {
      user: "",
      comment: {
        date: " 11-3-24 / 13:11",
        text: "Se realizo el cambio en la fuentes que generaban conflicto entre menus ",
      },
    },
    {
      user: "",
      comment: {
        date: " 09-3-24 / 07:03",
        text: "Se realizo el cambio en el menu, se pusieron bien las fuentes",
      },
    },
    {
      user: "",
      comment: {
        date: " 09-3-24 / 11:03",
        text: "Se realizo el cambio en el template",
      },
    },
    {
      user: "",
      comment: {
        date: " 8-3-24 / 16:23",
        text: "Se realizo el cambio en la fuentes que generaban conflicto entre comentarios",
      },
    },
    {
      user: "",
      comment: {
        date: "  8-3-24 / 13:11",
        text: "Se realizo el cambio en la fuentes que generaban conflicto entre menus",
      },
    },
  ],

  status: {
    state: "",
    comment: "",
  },
  subTasks: [
    {
      enabled: false,
      checked: "default",
      /*--------------------------- */
      id: "",
      title: "Change color of the background",
      description:
        "The color of the background cant permit show some fonts, check if cant change this or wich is the better option ",
      comments: [
        {
          week: "1 ",
          date: " Day 15-3-03-2024",
          comment: [
            {
              severity: "success",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "success",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },

            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "error",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },
          ],
        },

        {
          week: "1",
          date: "Day 12-03-2024",
          comment: [
            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "error",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },

            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "warning",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },
          ],
        },
      ],
      changes: [
        {
          user: "",
          comment: {
            date: "12-3-24 / 20:03",
            text: "Se realizo el cambio en el header, ya no tiene puntas redondeadas donde deben ser rectangulares",
          },
        },
        {
          user: "",
          comment: {
            date: "11-3-24 / 15:03",
            text: "Se realizo el cambio necesario en el NavBar para que se pueda navegar correctamente",
          },
        },
        {
          user: "",
          comment: {
            date: " 11-3-24 / 13:11",
            text: "Se realizo el cambio en la fuentes que generaban conflicto entre menus",
          },
        },
        {
          user: "",
          comment: {
            date: " 09-3-24 / 07:03",
            text: "Se realizo el cambio en el menu, se pusieron bien las fuentes",
          },
        },
        {
          user: "",
          comment: {
            date: " 09-3-24 / 11:03",
            text: "Se realizo el cambio en el template",
          },
        },
        {
          user: "",
          comment: {
            date: " 8-3-24 / 16:23",
            text: "Se realizo el cambio en la fuentes que generaban conflicto entre comentarios",
          },
        },
        {
          user: "",
          comment: {
            date: " 8-3-24 / 13:11",
            text: "Se realizo el cambio en la fuentes que generaban conflicto entre menus",
          },
        },
      ],

      status: {
        state: "",
        comment: "",
      },

      createdAt: dayFormater(),

      finishDate: "",
    },
    {
      enabled: false,
      checked: "default",
      /*--------------------------- */
      id: "",
      title: "Change the font for comic sans",
      description: "Search the better way for implement Comic Sans font ",
      comments: [
        {
          week: "1 ",
          date: " Day 15-3-03-2024",
          comment: [
            {
              severity: "success",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "success",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },

            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "error",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },
          ],
        },

        {
          week: "1",
          date: "Day 12-03-2024",
          comment: [
            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "error",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },

            {
              severity: "error",
              text:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
                "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
            },

            {
              severity: "warning",
              text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
                "Voluptatum quas eveniet error velit enim officia repellendus" +
                "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
                "molestiae veniam. Inventore blanditiis sed aliquid!,",
            },
          ],
        },
      ],
      changes: [
        {
          user: "",
          comment: {
            date: " 8-3-24 / 16:23",
            text: "Se verifica que la fuente no es nada profesional para dejar informacion sobre los cambios realizados. Se revierte",
          },
        },
        {
          user: "",
          comment: {
            date: " 8-3-24 / 13:11",
            text: "Se realizo el cambio en la fuente por Comic Sans segun lo solicitado",
          },
        },
      ],

      status: {
        state: "",
        comment: "",
      },

      createdAt: dayFormater(),

      finishDate: "",
    },
  ],
  createdAt: dayFormater(),
  finishDate: "",
};

export const subTask = {
  enabled: false,
  checked: "default",
  /*--------------------------- */
  id: "",
  title: "Change color of the background",
  description:
    "The color of the background cant permit show some fonts, check if cant change this or wich is the better option ",
  comments: [
    {
      week: "1 ",
      date: " Day 15-3-03-2024",
      comment: [
        {
          severity: "success",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "success",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },

        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "error",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },
      ],
    },

    {
      week: "1",
      date: "Day 12-03-2024",
      comment: [
        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "error",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },

        {
          severity: "error",
          text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum quas eveniet error velit enim officia repellendusvoluptatibus cumque molestiae nobis." +
            "Hic ipsam voluptate suscipitmolestiae veniam. Inventore blanditiis sed aliquid!",
        },

        {
          severity: "warning",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit." +
            "Voluptatum quas eveniet error velit enim officia repellendus" +
            "voluptatibus cumque molestiae nobis. Hic ipsam voluptate suscipit" +
            "molestiae veniam. Inventore blanditiis sed aliquid!,",
        },
      ],
    },
  ],
  changes: [
    {
      user: "",
      comment:
        "12-3-24 / 20:03 hs Se realizo el cambio en el header, ya no tiene puntas redondeadas donde deben ser rectangulares",
    },
    {
      user: "",
      comment:
        "11-3-24 / 20:03 hs  Se realizo el cambio necesario en el NavBar para que se pueda navegar correctamente",
    },
    {
      user: "",
      comment:
        " 11-3-24 / 13:11 hs  Se realizo el cambio en la fuentes que generaban conflicto entre menus",
    },
    {
      user: "",
      comment:
        "09-3-24 / 07:03 hs  Se realizo el cambio en el menu, se pusieron bien las fuentes",
    },
    {
      user: "",
      comment: " 09-3-24 / 11:03 hs Se realizo el cambio en el template",
    },
    {
      user: "",
      comment:
        "8-3-24 / 16:23 hs Se realizo el cambio en la fuentes que generaban conflicto entre comentarios",
    },
    {
      user: "",
      comment:
        "  8-3-24 / 13:11 hs  Se realizo el cambio en la fuentes que generaban conflicto entre menus",
    },
  ],

  status: {
    state: "",
    comment: "",
  },

  createdAt: dayFormater(),

  finishDate: "",
};
