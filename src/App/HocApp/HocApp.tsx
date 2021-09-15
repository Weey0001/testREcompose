import { compose, withHandlers, withState } from "recompose";

let addTasks = withState("tasks", "setTasks", []);
let addText = withState("text", "setText", "");
let addHandlers = withHandlers({
  AddTasks: ({ setTasks, tasks, text, setText }) => (_: any) => {
    setTasks([text, ...tasks]);
    setText("");
  },
  AddText: ({ setText }) => (text: string) => setText(text)
});

export default compose(addTasks, addText, addHandlers);
