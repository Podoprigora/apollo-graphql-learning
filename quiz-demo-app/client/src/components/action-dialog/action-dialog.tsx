import { useCallback, useState } from 'react';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export interface ActionDialogProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'delete';
  confirmBtnText?: string;
  cancelBtnText?: string;
  maxWidth?: number;
  onConfirm?: () => Promise<unknown> | void;
  onCancel?: () => void;
}

export const ActionDialog = (props: ActionDialogProps) => {
  const {
    open,
    title,
    maxWidth = 420,
    children,
    cancelBtnText = 'Cancel',
    confirmBtnText = 'OK',
    variant = 'default',
    onCancel,
    onConfirm,
  } = props;
  const [loading, setLoading] = useState(false);

  const handleCancel = useCallback(() => {
    if (onCancel && !loading) {
      onCancel();
    }
  }, [onCancel, loading]);

  const handleConfirm = useCallback(async () => {
    if (onConfirm && !loading) {
      setLoading(true);

      await onConfirm();

      setLoading(false);
    }
  }, [onConfirm, loading]);

  return (
    <Dialog open={open} maxWidth={false} PaperProps={{ sx: { maxWidth } }} onClose={handleCancel}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
      <DialogActions>
        <Button variant="text" color="inherit" onClick={handleCancel}>
          {cancelBtnText}
        </Button>
        <Button
          variant="contained"
          disableElevation
          {...(variant === 'delete' && { color: 'error' })}
          sx={{ minWidth: 100 }}
          onClick={handleConfirm}
        >
          {loading ? <CircularProgress color="inherit" size={24} thickness={2.8} /> : confirmBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
