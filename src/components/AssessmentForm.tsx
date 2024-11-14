import { useState } from "react";
import type { Area } from "../interfaces/area.interface";
import InfoSection from "./InfoSection";
import QuestionnaireSection from "./QuestionnaireSection";

interface Props {
  area: Area;
  prev: string;
  next: string;
}

export default function AssessmentForm({ area, prev, next }: Props) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = area.sections[currentSectionIndex];
  const totalSections = area.sections.length;

  const handlePrevious = () => {
    if (currentSectionIndex === 0) {
      window.location.href = prev;
    } else {
      setCurrentSectionIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (currentSectionIndex === totalSections - 1) {
      window.location.href = next;
    } else {
      setCurrentSectionIndex((prev) => Math.min(totalSections - 1, prev + 1));
    }
  };

  const progress = ((currentSectionIndex + 1) / totalSections) * 100;

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-row gap-3">
        <InfoSection
          title={area.title}
          description={area.description}
          competenceTitle={currentSection.title}
          competenceDescription={currentSection.description}
          progress={progress}
          currentSectionIndex={currentSectionIndex}
          totalSections={totalSections}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />

        <QuestionnaireSection section={currentSection} />
        
      </div>
    </section>
  );
}
