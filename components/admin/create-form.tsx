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

  const initialState = { errors: {}, message: "" };
  const [actionState, formAction, isPending] = useActionState(
    actionFunction,
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
          {slug === "certificates" ? (
            <>
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
            </>
          ) : slug === "educations" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="name">school</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  placeholder="school"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="authority">degree</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="degree"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="authority">institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  placeholder="institution"
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
            </>
          ) : slug === "experiences" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="company">company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="company"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
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
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                />
              </div>
            </>
          ) : (
            <></>
          )}
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
