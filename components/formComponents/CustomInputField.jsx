import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const CustomInputField = ({
  name,
  error,
  helperText,
  label,
  multiline,
  rows,
  control,
  disabled
}) => {
  const methods = useFormContext();
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          disabled={disabled}
          {...field}
          label={label}
          multiline={multiline}
          rows={rows}
          fullWidth
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
};

export default CustomInputField;
