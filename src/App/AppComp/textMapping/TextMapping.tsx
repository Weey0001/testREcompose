import React from "react";
import { Text, View } from "react-native";
import { compose } from "recompose";
import HocTextMapping from "./HocTextMapping/HocTextMapping";

let TextMapping: React.FC<TextMappingInt> = ({ tasks }) => (
  <View style={{ flexDirection: "column-reverse" }}>
    {tasks &&
      tasks.map((task: string, index: number) => (
        <Text key={index} style={{ textAlign: "center" }}>
          {task}
          {index}
        </Text>
      ))}
    {/* {alert(true)} */}
  </View>
);

export default compose(HocTextMapping)(TextMapping);

interface TextMappingInt {
  tasks: string[];
}
