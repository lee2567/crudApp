export const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      return total + Number(item.expenses)
    }, 0);
  };