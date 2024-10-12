// src/types.ts

// Define o tipo para um item de projeto
export type ProjectItem = {
    title: string;
    area: string;
    link_bg_light: string;
    link_bg_dark: string;
    description: string;
    color: string;
  };
  
  // Define o tipo para um item na lista de projetos
  export type ListItem = {
    [key: string]: ProjectItem;
  };
  
  // Define o tipo para a lista de projetos
  export type ListBgsType = ListItem[];
  