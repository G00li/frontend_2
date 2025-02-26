export interface User{
  id: number; 
  name: string; 
}

export interface Repositorio {
  id: number; 
  name: string; 
  descricao: string;
  html_url: string; 
  language: string;
  public: boolean;
  
}

export interface Publicacao {
  id: number;  //TODO - Descobrir como associa o id (sendo unico) automaticamente
  name: string;
  objetivo: string; 
  descricao: string;
  tag: string;
}

export class SinglePublicacao {
  name: string;
  objetivo: string;
  descricao: string;
  tag: string; 

  constructor(item: Publicacao){
    this.name = item.name
    this.objetivo = item.objetivo
    this.descricao = item.descricao
    this.tag = item.tag
  }

}