import { compose, onlyUpdateForKeys } from "recompose";

// let addUpdater = shouldUpdate((current: any, next: any) => {
//   console.log(next.tasks);
//   return current.tasks !== next.tasks;
// });

let addOnlyForKey = onlyUpdateForKeys(["tasks"]);

export default compose(addOnlyForKey);
