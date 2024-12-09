import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ProjectState {
  name: string;
  color: string;
  description: string;
  techs?: string[];
  createdAt: string;
}

interface storeState {
  projects: ProjectState[];
}

interface storeAction {
  addProject: (project: ProjectState) => void;
  removeProject: (projectName: string) => void;
  reset: () => void;
}

const useProjects = create<storeState & storeAction>()(
  persist(
    (Set) => ({
      projects: [],
      addProject: (project) =>
        Set((state) => ({ projects: [...state.projects, project] })),
      removeProject: (projectName) =>
        Set((state) => ({
          projects: state.projects.filter(
            (project) => project.name !== projectName
          ),
        })),
      reset: () => Set(() => ({ projects: [] })),
    }),
    {
      name: 'ProjectStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProjects;
