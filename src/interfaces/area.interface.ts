export interface Area {
  id: string;
  title: string;
  description: string;
  image: string;
  sections: Section[];
}

export interface Section {
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  text: string;
  name: string;
  description: string;
  option_type: string;
}
