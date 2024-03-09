import React from "react";
import Button from "./Button";

//here we need to write the component in a story format
//In here we a default export and one or more name export

export default {
  //here title is important ee title aanu nammal left side navigation panenlil kaanunnath
  title: "Form/Button",
  //this is  equal to the button component that we created
  component: Button,
};

//every named export represnt a story
//named export is basically a react component

//primary

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
