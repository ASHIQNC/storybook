import React from "react";

//after version 5 we can import sories within stories
//that is here we are importing both button and input storis and reusing them to create a form
import { Primary as ButtonPrimary } from "../Button/Button.stories";
import { Large as InputLarge } from "../Input/Input.stories";
export default {
  type: "form/Subscription",
  //egane koduthillenkil error verum
  component: "",
};

export const primarySubscription = () => (
  <>
    <InputLarge />
    <br />
    <br />
    <ButtonPrimary />
  </>
);
