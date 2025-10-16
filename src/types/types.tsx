// src/types.ts

// Define o tipo para um item de projeto
export type ProjectItem = {
    title: string;
    area: string;
    link_bg_light: string;
    link_bg_dark: string;
    description: string;
    link: string;
    cover: string;
    color: string;
    date: string;
    technologies: string[];
    content?: Array<{
      title: string;
      text: string;
      image: string;
    }>;
  };
  
  // Define o tipo para um item na lista de projetos
  export type ListItem = {
    [key: string]: ProjectItem;
  };
  
  // Define o tipo para a lista de projetos
  export type ListBgsType = ListItem[];
  