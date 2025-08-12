'use client';
import { Button } from '@mui/material';

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
}

export function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
    return (
        <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: '#6B7385',
        '&:hover': { backgroundColor: '#2d3748' },
        borderRadius: 2,
        px: 3,
        py: 1,
        textTransform: 'none',
        fontWeight: 400,
        fontSize: '20px'
      }}
    >
      {text}
    </Button>
    );
}