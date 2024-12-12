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
  visuals: string[] | [];
}

interface storeState {
  projects: ProjectState[];
}

interface storeAction {
  addProject: (project: ProjectState) => void;
  removeProject: (projectName: string) => void;
  addFeature: (projectName: string, feature: featureState) => void;
  removeFeature: (projectName: string, featureName: string) => void;
  checkFeature: (projectName: string, featureName: string) => void;
  unCheckFeature: (projectName: string, featureName: string) => void;
  addVisuals: (projectName: string, visuals: string[]) => void;
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
      checkFeature: (projectName, featureName) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                features: project.features.map((feature) => {
                  if (feature.name === featureName) {
                    return {
                      ...feature,
                      implemented: true,
                    };
                  }
                  return feature;
                }),
              };
            }
            return project;
          }),
        }));
      },
      unCheckFeature: (projectName, featureName) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                features: project.features.map((feature) => {
                  if (feature.name === featureName) {
                    return {
                      ...feature,
                      implemented: false,
                    };
                  }
                  return feature;
                }),
              };
            }
            return project;
          }),
        }));
      },
      addVisuals: (projectName, visuals) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                visuals: [...project.visuals, ...visuals],
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
