import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface featureState {
  name: string;
  description: string;
  dueDate: string;
  implemented: boolean;
}

export interface ProjectState {
  name: string;
  color: string;
  description: string;
  techs: string[] | [];
  createdAt: string;
  features: featureState[] | [];
}

interface storeState {
  projects: ProjectState[];
}

interface storeAction {
  addProject: (project: ProjectState) => void;
  removeProject: (projectName: string) => void;
  addFeature: (projectName: string, feature: featureState) => void;
  removeFeature: (projectName: string, featureName: string) => void;
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
      addFeature: (projectName, feature) =>
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                features: [...project.features, feature],
              };
            }
            return project;
          }),
        })),
      removeFeature: (projectName, featureName) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                features: project.features.filter(
                  (feature) => feature.name !== featureName
                ),
              };
            }
            return project;
          }),
        }));
      },
    }),
    {
      name: 'ProjectStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProjects;
