import { useState } from "react";

export const useChecked = () => {
  const [open, setOpen] = useState([]);

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value={}, index=0) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    setOpen(() => {
      const newOpenList = open;
      newOpenList[index] = !newOpenList[index];
      return newOpenList;
    });
  };


  return {
    open,
    checked,
    handleToggle
  }
};
