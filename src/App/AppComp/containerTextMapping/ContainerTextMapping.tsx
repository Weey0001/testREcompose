import React, { ReactChildren } from "react";
import { Button, View } from "react-native";
import { compose } from "recompose";
import HocContTextMap from "./HocContTextMap/HocContTextMap";

let ContTextMap: React.FC<ContTextMapInt> = ({
  children,
  MakeBlue,
  MakeRed,
  actionApp
}) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Button title="Blue" onPress={MakeBlue} color="blue" />
      <Button title="Red" onPress={MakeRed} color="red" />
    </View>

    <View
      style={{
        backgroundColor: actionApp
      }}
    >
      {children}
    </View>
  </View>
);

export default compose(HocContTextMap)(ContTextMap);

interface ContTextMapInt {
  children: ReactChildren;
  MakeBlue: () => void;
  MakeRed: () => void;
  actionApp: string;
}
