export interface IProduct {
  id: string;
  image: string;
  image2: string;
  text: string;
  title: string;
  info: string;
  projects: IProject[];
}

export interface IProject {
  id: number;
  title: string;
  client: string;
  year: string;
}
export interface ICustomers {
  id: string;
  image: string;
}
export interface ISampleWork {
  id: number;
  imgName: string;
  title: string;
  date: string;
  condition: string;
}


export interface IProject {
  id: number;
  title: string;
  client: string;
  features: string[];
  image: string;
  catalog: string;
}

// تعریف تایپ برای مجموعه پروژه‌ها
export interface ProjectsResponse {
  projects: IProject[];
}