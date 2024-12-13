'use client';

import { techs } from '@/constant/constant';
import React, { useState } from 'react';
import Tags from './Tags';
import { Button } from '@/components/ui/button';
import { Check, CheckCheck, CheckCircle, CheckCircle2 } from 'lucide-react';
import useProjects from '@/stores/use-projects';
import { toast } from 'sonner';

interface Props {
  projectName: string;
  closeDialog: () => void;
}

const AddTechForm = ({ projectName, closeDialog }: Props) => {
  const { addTechs, projects } = useProjects();
  const currentProject = projects.find(
    (project) => project.name === projectName
  );
  const [selected, setSelected] = useState<string[]>(
    currentProject?.techs || []
  );

  const handleSelect = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  const handleTechStore = () => {
    const alreadyExists = currentProject?.techs.find((t) => {
      return selected.includes(t);
    });
    if (alreadyExists) {
      toast.error('you are trying to add a tech that already exists');
    } else {
      addTechs(projectName, selected);
      toast.success(`${selected.length} techs added successfuly`);
      closeDialog();
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {techs.map((tech) => {
          return (
            <div
              className={`flex items-center gap-x-2 px-3 py-1.5 rounded-full cursor-pointer ${
                selected.includes(tech.name)
                  ? 'bg-myaccentlight/20 text-myaccent ring-1 ring-myaccentlight'
                  : 'text-mytextlight bg-mybg border-mybglight border'
              }`}
              onClick={() => handleSelect(tech.name)}
              key={tech.name}
            >
              <div className={`text-sm font-body font-semibold `}>
                {tech.name}
              </div>
              {selected.includes(tech.name) && (
                <CheckCircle2 size={12} className="text-myaccent" />
              )}
            </div>
          );
        })}
      </div>
      <Button
        onClick={handleTechStore}
        className="text-sm text-mybg font-body  bg-myaccentdark hover:bg-myaccent w-full"
      >
        Add Techs
      </Button>
    </div>
  );
};

export default AddTechForm;
