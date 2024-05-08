export const colored = (task) => {
    const color =
      task.status === "approved"
        ? "listItem.approved"
        : task.status === "refused"
        ? "listItem.refused"
        : "listItem.default";
    return  color ;
  };