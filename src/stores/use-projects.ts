import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface featureState {
  name: string;
  description: string;
  dueDate: Date;
  implemented: boolean;
}

export interface milestoneState {
  name: string;
  completed: boolean;
  dueDate: Date;
  completedDate: Date | null;
}

export interface ProjectState {
  name: string;
  color: string;
  description: string;
  techs: string[] | [];
  createdAt: string;
  features: featureState[] | [];
  milestones: milestoneState[] | [];
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
  addVisuals: (projectName: string, visuals: string) => void;
  deleteVisuals: (projectName: string, visuals: string) => void;
  addTechs: (projectName: string, tech: string[]) => void;
  removetechs: (projectName: string, tech: string) => void;
  addMilestone: (projectName: string, milestone: milestoneState) => void;
  removeMilestone: (projectName: string, milestone: string) => void;
  toggleMilestone: (projectName: string, milestone: string) => void;
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
                visuals: [...project.visuals, visuals],
              };
            }
            return project;
          }),
        }));
      },
      deleteVisuals: (projectName, visuals) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                visuals: project.visuals.filter((visual) => visual !== visuals),
              };
            }
            return project;
          }),
        }));
      },

      addTechs: (projectName, techs) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                techs: [...project.techs, ...techs],
              };
            }
            return project;
          }),
        }));
      },

      removetechs: (projectName, tech) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                techs: project.techs.filter((t) => t !== tech),
              };
            }
            return project;
          }),
        }));
      },

      removeMilestone: (projectName, milestone) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                milestones: project.milestones.filter(
                  (task) => task.name !== milestone
                ),
              };
            }
            return project;
          }),
        }));
      },

      addMilestone: (projectName, milestone) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                milestones: [...project.milestones, milestone],
              };
            }
            return project;
          }),
        }));
      },

      toggleMilestone: (projectName, milestone) => {
        Set((state) => ({
          projects: state.projects.map((project) => {
            if (project.name === projectName) {
              return {
                ...project,
                milestones: project.milestones.map((task) => {
                  if (task.name === milestone) {
                    return {
                      ...task,
                      completed: !task.completed,
                    };
                  }
                  return task;
                }),
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
