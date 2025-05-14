"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { Button } from "../button";
import { Main } from "@/types/main";

type Props = {
  data: Main[];
};

export default function Portal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} aria-label="더 읽기 버튼">
        Read More
      </Button>

      {showModal &&
        createPortal(
          <ModalContent {...props} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
