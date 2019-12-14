export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { action: "openModal" };
    case "CLOSE_MODAL":
      return { action: "closeModal" };
    default:
      return state;
  }
};
