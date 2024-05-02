export const colored = (task) => {
    const color =
      task.status === "approved"
        ? "listItem.approved"
        : task.status === "denied"
        ? "listItem.denied"
        : "listItem.default";
    return  color ;
  };