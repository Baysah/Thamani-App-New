import { useState, useEffect } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import {
  Box,
  Grid,
  MenuItem,
  Typography,
  Button,
  List,
  ListItem,
} from '@mui/material';
import CustomInputField from '../../formComponents/CustomInputField';
import CustomSelectField from '../../formComponents/CustomSelectField';

const Form43 = ({ nestedIndex }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: `import_summary_group[${nestedIndex}].import_revenue_claimed`,
  });


  const arrayLength = fields.length;
  const handleSelectChange = () => {};

  return (
    <>
      {fields.map((item, k) => {
        return (
          <List key={k}>
            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <CustomSelectField
                    control={control}
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].accounting_class_code`}
                    required={true}
                    label="Accounting Class"
                    additionalFunction={handleSelectChange}
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].accounting_class_code
                    }
                  >
                    <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                    <MenuItem value="R">
                      Full Replacement of Drawback Entry Summary
                    </MenuItem>
                  </CustomSelectField>
                  {methods.formState.errors.import_summary_group?.[nestedIndex]
                    ?.import_revenue_claimed?.[k].accounting_class_code && (
                    <p className="error_helper_text">
                      {
                        methods.formState.errors.import_summary_group?.[
                          nestedIndex
                        ]?.import_revenue_claimed?.[k].accounting_class_code
                          ?.message
                      }
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].accounting_class_code`}
                    label="Accounting Class Code"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].accounting_class_code
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].accounting_class_code
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_revenue_claimed?.[k].accounting_class_code
                            .message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].calculated_amount`}
                    label="Calculated Amount"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].calculated_amount
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].calculated_amount
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_revenue_claimed?.[k].calculated_amount
                            .message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].class_amount`}
                    label="Class Amount"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].class_amount
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].class_amount
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_revenue_claimed?.[k].class_amount.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].adjusted_claim_amount`}
                    label="Class Amount"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].adjusted_claim_amount
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].adjusted_claim_amount
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_revenue_claimed?.[k].adjusted_claim_amount
                            .message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_revenue_claimed[${k}].qualifier_indicator`}
                    label="Class Amount"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].qualifier_indicator
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_revenue_claimed?.[k].qualifier_indicator
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_revenue_claimed?.[k].qualifier_indicator
                            .message
                        : null
                    }
                  />
                </Grid>
              </Grid>
            </ListItem>
            <Box
              sx={{
                display: 'block',
                width: '100%',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={() => remove(k)}
                size="large"
              >
                Delete Import Revenue Claimed
              </Button>
            </Box>
          </List>
        );
      })}
      {arrayLength < 20 && (
        <Box
          sx={{
            marginTop: '10px',
          }}
        >
          <Button
            variant="contained"
            type="button"
            fullWidth
            onClick={() => {
              append({
                accounting_class_code: '',
                calculated_amount: '',
                class_amount: '',
                adjusted_claim_amount: '',
                qualifier_indicator: '',
              });
            }}
          >
            Add Import Revenue Claimed
          </Button>
        </Box>
      )}
    </>
  );
};

export default Form43;
