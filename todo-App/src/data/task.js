export const task = {
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
};

export const taskWithData = {
  enabled: false,
  checked: "default",
  id: "",
  title: "Create a Template About view",
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
          severity: "sucess",
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
        "12-3-24 / 20:03 hs <br /> Se realizo el cambio en el header, ya no tiene puntas redondeadas donde deben ser rectangulares",
    },
    {
      user: "",
      comment:
        "11-3-24 / 20:03 hs <br /> Se realizo el cambio necesario en el NavBar para que se pueda navegar correctamente",
    },
    {
      user: "",
      comment:
        " 11-3-24 / 13:11 hs <br /> Se realizo el cambio en la fuentes que generaban conflicto entre menus",
    },
    {
      user: "",
      comment:
        "09-3-24 / 07:03 hs <br /> Se realizo el cambio en el menu, se pusieron bien las fuentes",
    },
    {
      user: "",
      comment: " 09-3-24 / 11:03 hs <br /> Se realizo el cambio en el template",
    },
    {
      user: "",
      comment:
        "8-3-24 / 16:23 hs <br />Se realizo el cambio en la fuentes que generaban conflicto entre comentarios",
    },
    {
      user: "",
      comment:
        "  8-3-24 / 13:11 hs <br />Se realizo el cambio en la fuentes que generaban conflicto entre menus",
    },
  ],
  status: "",

  createdAt: new Date().toUTCString(),

  finishDate: "",
};
