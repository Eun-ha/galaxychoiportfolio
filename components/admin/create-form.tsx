"use client";

import {
  CertificateState,
  createCertificate,
  createDescriptions,
  createEducations,
  createExperiences,
  DescriptionState,
  EducationState,
  ExperienceState,
} from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { BoundaryFrom } from "@/components/ui/boundary-form";

import { useActionState, useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function CreateForm(props: Props) {
  const { slug } = props;

  console.log(slug);

  // slug 값에 따라 액션 함수 선택
  const getActionFunction = (): ((
    state:
      | CertificateState
      | ExperienceState
      | EducationState
      | DescriptionState,
    payload: FormData
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  ) => Promise<any>) => {
    if (slug === "certificates") return createCertificate;
    if (slug === "experiences") return createExperiences;
    if (slug === "educations") return createEducations;

    return createDescriptions;
  };

  const actionFunction = getActionFunction(); // 선택된 함수 할당

  if (!actionFunction) {
    throw new Error(`No action function found for slug: ${slug}`);
  }

  console.log("actionFunction");
  console.log(actionFunction);

  const initialState = { errors: {}, message: "" };
  const [actionState, formAction, isPending] = useActionState(
    createCertificate,
    initialState
  );

  const [isErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (actionState !== null) {
      setErrorMessage(true);

      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setErrorMessage(false);
    }
  }, [actionState]);

  return (
    <form action={formAction}>
      <div className="w-full">
        <BoundaryFrom>
          <div className="w-full flex mb-3">
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
            />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="date">date</label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="date"
              required
            />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="authority">authority</label>
            <input
              type="text"
              id="authority"
              name="authority"
              placeholder="authority"
              required
            />
          </div>
        </BoundaryFrom>
      </div>
      {isErrorMessage ? (
        <span className="block text-point-red mb-3">
          {typeof actionState === "string" ? actionState : actionState?.message}
        </span>
      ) : (
        ""
      )}
      <Button type="submit" aria-label="폼 전송 버튼" aria-disabled={isPending}>
        {isPending ? "대기중..." : "완료"}
      </Button>
    </form>
  );
}
