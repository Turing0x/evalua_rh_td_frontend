interface InfoSectionProps {
  title: string;
  description: string;
  competenceTitle: string;
  competenceDescription: string;
  progress: number;
  currentSectionIndex: number;
  totalSections: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const InfoSection = ({
  title,
  description,
  competenceTitle,
  competenceDescription,
  progress,
  currentSectionIndex,
  totalSections,
  handlePrevious,
  handleNext,
}: InfoSectionProps) => {
  return (
    <div className="bg-white p-8 lg:p-12 flex flex-col h-dvh sticky top-0 w-[30%]">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
        <h3 className="font-semibold text-gray-900 mb-2">{competenceTitle}</h3>
        <p className="text-gray-600">{competenceDescription}</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">
          Progreso de la evaluación
        </h4>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600">
          Sección {currentSectionIndex + 1} de {totalSections}
        </p>
      </div>

      <div className="flex flex-1 justify-between items-end pt-6">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red/90 transition-colors"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          {currentSectionIndex === totalSections - 1
            ? "Finalizar"
            : "Siguiente →"}
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
