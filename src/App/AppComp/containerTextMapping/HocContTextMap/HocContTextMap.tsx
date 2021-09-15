import { compose, withHandlers, withReducer } from "recompose";

let actionReducer = (actionApp: string, action: any) => {
  switch (action.type) {
    case "red":
      return (actionApp = "red");

    case "blue":
      return (actionApp = "blue");

    default:
      return (actionApp = "green");
  }
};

let addReducer = withReducer("actionApp", "dispatch", actionReducer, "green");

let addHandlers = withHandlers({
  MakeRed: ({ dispatch }) => (_: undefined) => dispatch({ type: "red" }),
  MakeBlue: ({ dispatch }) => (_: undefined) => dispatch({ type: "blue" })
});

export default compose(addReducer, addHandlers);
