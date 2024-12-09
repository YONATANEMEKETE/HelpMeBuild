import * as React from 'react';

export function useDialog() {
  const [open, setOpen] = React.useState<boolean>(false);

  return { open, setOpen };
}
