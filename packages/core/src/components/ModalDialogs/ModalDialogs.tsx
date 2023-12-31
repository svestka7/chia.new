import { Dialog, DialogContent } from '@mui/material';
import React, { cloneElement, useContext, Suspense } from 'react';

import Loading from '../Loading';

import ModalDialogsContext from './ModalDialogsContext';

function DialogLoading(props) {
  const { onClose } = props;

  return (
    <Dialog onClose={onClose} open>
      <DialogContent>
        <Loading center />
      </DialogContent>
    </Dialog>
  );
}

export default function ModalDialogs() {
  const { dialogs } = useContext(ModalDialogsContext);

  return (
    <>
      {dialogs.map((item) => {
        const { id, dialog, handleClose } = item;

        const updatedDialog = cloneElement(dialog, {
          show: true,
          onClose: handleClose,
          open: true,
        });

        return (
          <Suspense key={id} fallback={<DialogLoading onClose={handleClose} />}>
            {updatedDialog}
          </Suspense>
        );
      })}
    </>
  );
}
