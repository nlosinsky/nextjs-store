"use client";

import { useState } from "react";

import Image from "next/image";

import { type actionFunction } from "@/utils/types";

import { Button } from "../ui/button";
import { SubmitButton } from "./Buttons";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        className="mb-4 h-[200px] w-[200px] rounded-md object-cover"
        alt={name}
      />

      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="mt-4 max-w-md">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
