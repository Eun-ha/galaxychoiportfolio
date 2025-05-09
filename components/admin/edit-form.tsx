"use client";

import {
  editCertificate,
  editDescriptions,
  editEducations,
  editExperiences,
} from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import {
  isCertificate,
  isDescription,
  isEducation,
  isExperience,
} from "@/types/admin";

export default function EditForm({
  project,
  slug,
}: {
  project: Certificate | Education | Experience | Description;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const getEditFunction = () => {
    if (slug === "certificates") return editCertificate.bind(null, project.id);
    if (slug === "educations") return editEducations.bind(null, project.id);
    if (slug === "experiences") return editExperiences.bind(null, project.id);
    if (slug === "descriptions") return editDescriptions.bind(null, project.id);
    return null;
  };

  const editProject = getEditFunction();

  if (!editProject) {
    throw new Error(`No edit function found for slug: ${slug}`);
  }
  const [actionState, formAction, isPending] = useActionState(
    editProject,
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
            isCertificate(project) && (
              <>
                <div className="w-full flex mb-3">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={project.name}
                    placeholder="name"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="date">date</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    defaultValue={project.date}
                    placeholder="date"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="authority">authority</label>
                  <input
                    type="text"
                    id="authority"
                    name="authority"
                    defaultValue={project.authority}
                    placeholder="authority"
                  />
                </div>
              </>
            )
          ) : slug === "educations" ? (
            isEducation(project) && (
              <>
                <div className="w-full flex mb-3">
                  <label htmlFor="school">school</label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    defaultValue={project.school}
                    placeholder="school"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="degree">degree</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    defaultValue={project.degree}
                    placeholder="degree"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="institution">institution</label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    defaultValue={project.institution}
                    placeholder="institution"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="date">date</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    defaultValue={project.date}
                    placeholder="date"
                  />
                </div>
              </>
            )
          ) : slug === "experiences" ? (
            isExperience(project) && (
              <>
                <div className="w-full flex mb-3">
                  <label htmlFor="company">company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    defaultValue={project.company}
                    placeholder="company"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={project.title}
                    placeholder="title"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="date">date</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    defaultValue={project.date}
                    placeholder="date"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="description">description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={project.description}
                    placeholder="description"
                  />
                </div>
              </>
            )
          ) : slug === "descriptions" ? (
            isDescription(project) && (
              <>
                <div className="w-full flex mb-3">
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={project.title}
                    placeholder="title"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="date">date</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    defaultValue={project.date}
                    placeholder="date"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="performance">performance</label>
                  {project.performance.map((item, index) => (
                    <input
                      key={index}
                      type="text"
                      id="performance"
                      name="performance"
                      defaultValue={item}
                      placeholder="performance"
                    />
                  ))}
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="role">role</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    defaultValue={project.role}
                    placeholder="role"
                  />
                </div>
                <div className="w-full flex mb-3">
                  <label htmlFor="skills">skills</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    defaultValue={project.skills}
                    placeholder="skills"
                  />
                </div>
              </>
            )
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
        {isPending ? "대기중..." : "수정"}
      </Button>
    </form>
  );
}
