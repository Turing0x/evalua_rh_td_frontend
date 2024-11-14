import type { Section } from "../interfaces/area.interface";

interface Props {
  section: Section;
}

const QuestionnaireSection = ({ section }: Props) => {
  return (
    <section className="bg-gray-50 lg:p-12 w-[70%]">
      <div className="grid grid-cols-2 gap-4">
        {section.questions.map((question, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {question.text}
              </h4>

              <p className="text-lg text-gray-600">{question.description}</p>
            </div>
            <div className="space-y-3">
              {section.questions[index].option_type === "type_1" ? (
                <>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={question.name}
                      value="1"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-gray-700">Nunca</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={question.name}
                      value="2"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-gray-700">Raramente</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={question.name}
                      value="3"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-gray-700">A veces</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={question.name}
                      value="4"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-gray-700">Frecuentemente</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={question.name}
                      value="5"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-gray-700">Siempre</span>
                  </label>
                </>
              ) : (
                <>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input type="radio" name={question.name} value="1" />
                    <span>Principiante</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input type="radio" name={question.name} value="2" />
                    <span>Básico</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input type="radio" name={question.name} value="3" />
                    <span>Intermedio</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input type="radio" name={question.name} value="4" />
                    <span>Avanzado</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                    <input type="radio" name={question.name} value="5" />
                    <span>Experto</span>
                  </label>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionnaireSection;
