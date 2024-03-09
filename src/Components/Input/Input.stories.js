import React from "react";
import Input from "./Input";
import "./input.css";
export default {
  //nammalk group cheyyanm some component like input and button inside a form folder for that we can add Form/Input
  //egane Input component oru form akath verum
  title: "Form/Input",
  //here title is important ee title aanu nammal left side navigation panenlil kaanunnath
  //   title: "Input",
  //this is  equal to the button component that we created
  component: Input,
};

export const Medium = () => <Input placeholder="medium"></Input>;
export const small = () => <Input size="small" placeholder="small"></Input>;
export const Large = () => <Input size="large" placeholder="large"></Input>;

//note:nammalk story name venamankil maatam eth version 6 thott aanu vanath for that ,
//not working
// small.storyname = "small input";

// sorting
//go to doc of story book -> naming component hierarchy ->sorting story -> copy the options part
//options: {
// The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
//   storySort: (a, b) =>
//     a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
// },
//paste it in the .storybook->preview.js
