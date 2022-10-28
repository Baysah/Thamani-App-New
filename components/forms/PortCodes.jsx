import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Grid, MenuItem } from '@mui/material';
import CustomInputField from '../formComponents/CustomInputField';
import CustomSelectField from '../formComponents/CustomSelectField';

const PortCodes = () => {
  const methods = useFormContext();
  const { control } = methods;
  //set variable for the api port codes are being fetched from
  const API_URL =
    'https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/portCodes';

  //Create state variable to store port codes
  const [options, setOptions] = useState([]);

  //Fetch data from API
  const fetchPortOptions = async () => {
    try {
      const res = await fetch(API_URL);
      const listItems = await res.json();
      setOptions(listItems);
    } catch (err) {
      console.log(err.stack);
    }
  };

  //invoke fetchPortOptions on pageload
  useEffect(() => {
    fetchPortOptions();
  }, []);
  //Sorting function
  const sortedList = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 0;
  };
  //sort options name alpha
  options.sort(sortedList);
  //maps the options
  const PortOptions = options.map((option, index) => {
    return (
      <MenuItem key={index} value={option.code} id={option.id}>
        {option.name}
      </MenuItem>
    );
  });

  const handleProcDeptPortChange = () => {

  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <CustomSelectField
            control={control}
            name="depart_port_code"
            required={true}
            label="Processing Departure Port"
            additionalFunction={handleProcDeptPortChange}
            error={methods.formState.errors.depart_port_code}
          >
            {PortOptions}
          </CustomSelectField>
          {methods.formState.errors?.depart_port_code && (
            <p className="error_helper_text">
              {methods.formState.errors?.depart_port_code?.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomInputField
            control={control}
            name="depart_port_code"
            label="Processing Departure Port Code"
            error={methods.formState.errors.depart_port_code}
            helperText={
              methods.formState.errors.depart_port_code
                ? methods.formState.errors.depart_port_code.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputField
            control={control}
            disabled={true}
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
        <Grid item xs={12}>
          <CustomInputField
            control={control}
            disabled={false}
            name="filer_code"
            label="Filer Code"
            error={methods.formState.errors.filer_code}
            helperText={
              methods.formState.errors.filer_code
                ? methods.formState.errors.filer_code.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CustomSelectField
            control={control}
            name="remote_depart_port_code"
            required={true}
            label="Remote Departure Port"
            additionalFunction={handleProcDeptPortChange}
            error={methods.formState.errors.remote_depart_port_code}
          >
            {PortOptions}
          </CustomSelectField>
          {methods.formState.errors?.remote_depart_port_code && (
            <p className="error_helper_text">
              {methods.formState.errors?.remote_depart_port_code?.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomInputField
            control={control}
            name="remote_depart_port_code"
            label="Remote Departure Port Code"
            error={methods.formState.errors.remote_depart_port_code}
            helperText={
              methods.formState.errors.remote_depart_port_code
                ? methods.formState.errors.remote_depart_port_code.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputField
            control={control}
            name="processing_filer_office_code"
            label="Processing Filer Office Code"
            error={methods.formState.errors.processing_filer_office_code}
            helperText={
              methods.formState.errors.processing_filer_office_code
                ? methods.formState.errors.processing_filer_office_code.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputField
            control={control}
            name="remote_preparer_filer_code"
            label="Remote Preparer Filer Code"
            error={methods.formState.errors.remote_preparer_filer_code}
            helperText={
              methods.formState.errors.remote_preparer_filer_code
                ? methods.formState.errors.remote_preparer_filer_code.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputField
            control={control}
            name="remote_preparer_office_code"
            label="Remote Preparer Office Code"
            error={methods.formState.errors.remote_preparer_office_code}
            helperText={
              methods.formState.errors.remote_preparer_office_code
                ? methods.formState.errors.remote_preparer_office_code.message
                : null
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortCodes;
