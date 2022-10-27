import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Grid, MenuItem } from '@mui/material';
import CustomInputField from '../formComponents/CustomInputField';
import CustomSelectField from '../formComponents/CustomSelectField';
import applicationCode from '../../src/data/applicationCodes';

const ApplicationIdentifier = () => {
    const methods = useFormContext();
    const { control } = methods;
  const [appIDBox1Index, setappIDBox1Index] = useState(0);
  //handle boxOne Change
  const handleBox1Change = (result) => {
    switch (result) {
      case 'none':
        setappIDBox1Index(0);
        break;
      case 'create-update':
        setappIDBox1Index(1);
        break;
      case 'create-resubmission':
        setappIDBox1Index(2);
        break;
      case 'query':
        setappIDBox1Index(3);
        break;
      case 'processing-transaction':
        setappIDBox1Index(4);
        break;
      default:
        setappIDBox1Index(appIDBox1Index);
    }
  };

  //Set options for box 1
  const selectbox1_options = applicationCode.map((item, index) => {
    return (
      <MenuItem key={index} data-id={item.id} value={item.value} id={item.id}>
        {item.text} {index}
      </MenuItem>
    );
  });
  //set options for box 2 based on whats selected in box one
  const selectbox2_options = applicationCode[appIDBox1Index].options.map(
    (item) => {
      return (
        <MenuItem key={item.id} value={item.value}>
          {item.text}
        </MenuItem>
      );
    }
  );
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomSelectField
            control={control}
            name="app_id_code_box1"
            required={true}
            label="Box 1"
            additionalFunction={handleBox1Change}
            error={methods.formState.errors.app_id_code_box1}
          >
            {selectbox1_options}
          </CustomSelectField>
          {methods.formState.errors?.app_id_code_box1 && (
            <p className="error_helper_text">
              {methods.formState.errors?.app_id_code_box1?.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomSelectField
            control={control}
            name="app_id_code"
            required={true}
            label="Application Identifier Code"
            additionalFunction={handleBox1Change}
            error={methods.formState.errors.app_id_code}
          >
            {selectbox2_options}
          </CustomSelectField>
          {methods.formState.errors?.app_id_code && (
            <p className="error_helper_text">
              {methods.formState.errors?.app_id_code?.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInputField
            control={control}
            name="app_id_code"
            label="Application Identifier Code"
            error={methods.formState.errors.app_id_code}
            helperText={
              methods.formState.errors.app_id_code
                ? methods.formState.errors.app_id_code.message
                : null
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicationIdentifier;
