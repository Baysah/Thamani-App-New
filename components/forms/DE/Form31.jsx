import { useState, useEffect } from 'react';
import { useFormContext, useFieldArray} from 'react-hook-form';
import { Box, Grid, MenuItem, Typography, Button, List, ListItem } from '@mui/material';
import CustomInputField from '../../formComponents/CustomInputField';
import CustomSelectField from '../../formComponents/CustomSelectField';

const Form31 = () => {
     const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: 'bond_details',
  });
  const handlechange = () =>{}
  const arrayLength = fields.length;
  return (
    <Box>
      <ul>
        <Typography variant="h4">Bond Details</Typography>
        {fields.map((item, index) => {
            return(
                <List key={index}>
                <ListItem>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <CustomSelectField
                  control={control}
                  name={`bond_details.${index}.bond_type_code`}
                  required={true}
                  label="Bond Type"
                  additionalFunction={handlechange}
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_type_code
                  }
                >
                  <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                  <MenuItem value="R">
                    Full Replacement of Drawback Entry Summary
                  </MenuItem>
                </CustomSelectField>
                {methods.formState.errors.bond_details?.[index]
                  ?.bond_type_code && (
                  <p className="error_helper_text">
                    {
                      methods.formState.errors.bond_details?.[index]
                        ?.bond_type_code?.message
                    }
                  </p>
                )}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomInputField
                  name={`bond_details.${index}.bond_type_code`}
                  label="Bond Type Code"
                  fullWidth
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_type_code
                  }
                  helperText={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_type_code
                      ? methods.formState.errors.bond_details?.[index]
                          ?.bond_type_code.message
                      : null
                  }
                />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CustomSelectField
                  control={control}
                  name={`bond_details.${index}.bond_destination_type_code`}
                  required={true}
                  label="Bond Designation Type"
                  additionalFunction={handlechange}
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_destination_type_code
                  }
                >
                  <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                  <MenuItem value="R">
                    Full Replacement of Drawback Entry Summary
                  </MenuItem>
                </CustomSelectField>
                {methods.formState.errors.bond_details?.[index]
                  ?.bond_destination_type_code && (
                  <p className="error_helper_text">
                    {
                      methods.formState.errors.bond_details?.[index]
                        ?.bond_destination_type_code?.message
                    }
                  </p>
                )}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomInputField
                  name={`bond_details.${index}.bond_destination_type_code`}
                  label="Bond Designation Type Code"
                  fullWidth
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_destination_type_code
                  }
                  helperText={
                    methods.formState.errors.bond_details?.[index]
                      ?.bond_destination_type_code
                      ? methods.formState.errors.bond_details?.[index]
                          ?.bond_destination_type_code.message
                      : null
                  }
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomInputField
                  name={`bond_details.${index}.surety_company_code`}
                  label="Surety Company Code"
                  fullWidth
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.surety_company_code
                  }
                  helperText={
                    methods.formState.errors.bond_details?.[index]
                      ?.surety_company_code
                      ? methods.formState.errors.bond_details?.[index]
                          ?.surety_company_code.message
                      : null
                  }
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomInputField
                  name={`bond_details.${index}.stb_amount`}
                  label="STB Amount"
                  fullWidth
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.stb_amount
                  }
                  helperText={
                    methods.formState.errors.bond_details?.[index]
                      ?.stb_amount
                      ? methods.formState.errors.bond_details?.[index]
                          ?.stb_amount.message
                      : null
                  }
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomInputField
                  name={`bond_details.${index}.stb_producer_amount_number`}
                  label="STB Producer Account Number"
                  fullWidth
                  error={
                    methods.formState.errors.bond_details?.[index]
                      ?.stb_producer_amount_number
                  }
                  helperText={
                    methods.formState.errors.bond_details?.[index]
                      ?.stb_producer_amount_number
                      ? methods.formState.errors.bond_details?.[index]
                          ?.stb_producer_amount_number.message
                      : null
                  }
                />
                </Grid>
                </Grid>
                </ListItem>
                <Box
              sx={{
                display: 'block',
                width: { xs: '100%', sm: '50%', md: '20%' },
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={() => remove(index)}
                size="large"
              >
                Delete
              </Button>
            </Box>
                </List>
            )
        })}
        {arrayLength < 1 && (
            <Box mt={2}>
          <Button
            variant="contained"
            type="button"
            size="large"
            onClick={() => {
              append({
                bond_type_code: '',
                bond_destination_type_code: '',
                surety_company_code: '',
                stb_amount: '',
                stb_producer_amount_number: '',
              });
            }}
          >
            Add Bond Detail
          </Button>
        </Box>
        )}
        
      </ul>
    </Box>
  );
};

export default Form31;
