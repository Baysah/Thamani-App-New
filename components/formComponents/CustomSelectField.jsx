import { useFormContext, Controller } from 'react-hook-form';
import {
  Box,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const CustomSelectField = ({
  name,
  label,
  children,
  onChange,
  required,
  additionalFunction,
  error,
  control,
}) => {
  const methods = useFormContext({});
  return (
    <Controller
      name={name}
      control={control}
      defaultValue
      render={({ field, fieldState, formState }) => {
        return (
          <FormControl fullWidth>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              {...field}
              error={error}
              labelId={name}
              onChange={(e) => {
                field.onChange(e.target.value);
                const result = e.target.value;
                additionalFunction(result);
              }}
            >
              {children}
            </Select>
          </FormControl>
        );
      }}
    />
  );
};

export default CustomSelectField;
