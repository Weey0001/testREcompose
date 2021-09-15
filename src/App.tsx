import React from "react";
import { Text, TextInput, Button } from "react-native";
import { compose } from "recompose";
import ContainerTextMapping from "./App/AppComp/containerTextMapping/ContainerTextMapping";
import TextMapping from "./App/AppComp/textMapping/TextMapping";
import HocApp from "./App/HocApp/HocApp";

let App: React.FC<appProps> = ({ text, AddText, tasks, AddTasks }) => (
  <>
    <TextInput
      value={text}
      placeholder="add some text"
      onChangeText={AddText}
    />
    <Button title="Add" onPress={AddTasks} />
    <Text>Hi</Text>
    <ContainerTextMapping>
      <TextMapping tasks={tasks} />
    </ContainerTextMapping>
  </>
);

export default compose(HocApp)(App);

interface appProps {
  text: string;
  AddText: (_: string) => void;
  tasks: string[];
  AddTasks: any;
}
