'use client';

import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';
import { useEffect, useActionState } from 'react';

const initialState = {
  message: '',
};

function FormContainer({action, children,}: { action: actionFunction; children: React.ReactNode; }) {
  const [state, formAction] = useActionState(action, initialState);
  const {toast} = useToast();

  useEffect(() => {
    if (state.message) {
      toast({description: state.message});
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
