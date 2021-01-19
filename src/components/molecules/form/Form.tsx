import React from "react";
import { Button } from "@/components/atoms/Button";

export const Form: React.FC<{ submit: string }> = (props) => (
  <form>
    {props.children}
    <Button>Submit</Button>
  </form>
);
