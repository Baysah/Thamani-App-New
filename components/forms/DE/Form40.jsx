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

const Form40 = ({ nestedIndex, setFormState }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: `import_summary_group[${nestedIndex}].import_details`,
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
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].action_indicator`}
                    required={true}
                    label="Action Indicator"
                    additionalFunction={setFormState}
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].action_indicator
                    }
                  >
                    <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                    <MenuItem value="R">
                      Full Replacement of Drawback Entry Summary
                    </MenuItem>
                  </CustomSelectField>
                  {methods.formState.errors.import_summary_group?.[nestedIndex]
                    ?.import_details?.[k].action_indicator && (
                    <p className="error_helper_text">
                      {
                        methods.formState.errors.import_summary_group?.[
                          nestedIndex
                        ]?.import_details?.[k].action_indicator?.message
                      }
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].action_indicator`}
                    label="Action Indicator Code"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].action_indicator
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].action_indicator
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].action_indicator.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CustomSelectField
                    control={control}
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].drawback_accounting_mc`}
                    required={true}
                    label="Drawback Accounting Method"
                    additionalFunction={handleSelectChange}
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_accounting_mc
                    }
                  >
                    <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                    <MenuItem value="R">
                      Full Replacement of Drawback Entry Summary
                    </MenuItem>
                  </CustomSelectField>
                  {methods.formState.errors.import_summary_group?.[nestedIndex]
                    ?.import_details?.[k].drawback_accounting_mc && (
                    <p className="error_helper_text">
                      {
                        methods.formState.errors.import_summary_group?.[
                          nestedIndex
                        ]?.import_details?.[k].drawback_accounting_mc?.message
                      }
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].drawback_accounting_mc`}
                    label="Drawback Accounting Method Code"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_accounting_mc
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_accounting_mc
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].drawback_accounting_mc.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].entry_filer_code`}
                    label="Entry Filer Code"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].entry_filer_code
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].entry_filer_code
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].entry_filer_code.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].entry_number`}
                    label="Entry Number"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].entry_number
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].entry_number
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].entry_number.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].manufacture_ruling_number`}
                    label="Manufacture Ruling Number"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_ruling_number
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_ruling_number
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].manufacture_ruling_number
                            .message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CustomSelectField
                    control={control}
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].drawback_ec_of_delivery`}
                    required={true}
                    label="Drawback Eligible/Certificate"
                    additionalFunction={handleSelectChange}
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_ec_of_delivery
                    }
                  >
                    <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                    <MenuItem value="R">
                      Full Replacement of Drawback Entry Summary
                    </MenuItem>
                  </CustomSelectField>
                  {methods.formState.errors.import_summary_group?.[nestedIndex]
                    ?.import_details?.[k].drawback_ec_of_delivery && (
                    <p className="error_helper_text">
                      {
                        methods.formState.errors.import_summary_group?.[
                          nestedIndex
                        ]?.import_details?.[k].drawback_ec_of_delivery?.message
                      }
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].drawback_ec_of_delivery`}
                    label="Drawback Eligible/Certificate Code"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_ec_of_delivery
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].drawback_ec_of_delivery
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].drawback_ec_of_delivery.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CustomSelectField
                    control={control}
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].basis_of_claim`}
                    required={true}
                    label="Basis of Claim"
                    additionalFunction={handleSelectChange}
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].basis_of_claim
                    }
                  >
                    <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                    <MenuItem value="R">
                      Full Replacement of Drawback Entry Summary
                    </MenuItem>
                  </CustomSelectField>
                  {methods.formState.errors.import_summary_group?.[nestedIndex]
                    ?.import_details?.[k].basis_of_claim && (
                    <p className="error_helper_text">
                      {
                        methods.formState.errors.import_summary_group?.[
                          nestedIndex
                        ]?.import_details?.[k].basis_of_claim?.message
                      }
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].basis_of_claim`}
                    label="Basis of Claim"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].basis_of_claim
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].basis_of_claim
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].basis_of_claim.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].manufacture_date_received`}
                    label="Manufacture Date Received"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_date_received
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_date_received
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].manufacture_date_received
                            .message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].manufacture_date_used`}
                    label="Manufacture Date Used"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_date_used
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].manufacture_date_used
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].manufacture_date_used.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].cbp_es_line_number`}
                    label="CBP ES Line Number"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].cbp_es_line_number
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].cbp_es_line_number
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].cbp_es_line_number.message
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomInputField
                    name={`import_summary_group[${nestedIndex}].import_details[${k}].itin`}
                    label="ITIN"
                    fullWidth
                    error={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].itin
                    }
                    helperText={
                      methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_details?.[k].itin
                        ? methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_details?.[k].itin.message
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
                Delete Import Detial
              </Button>
            </Box>
          </List>
        );
      })}
      {arrayLength < 1 && (
        <Box
          sx={{
            marginTop: '10px',
          }}
        >
          <Button
            variant="contained"
            type="button"
            onClick={() => {
              append({
                action_indicator: '',
                drawback_accounting_mc: '',
                entry_filer_code: '',
                entry_number: '',
                manufacture_ruling_number: '',
                drawback_ec_of_delivery: '',
                basis_of_claim: '',
                manufacture_date_received: '',
                manufacture_date_used: '',
                cbp_es_line_number: '',
                itin: '',
              });
            }}
          >
            Add Import Detial
          </Button>
        </Box>
      )}
    </>
  );
};

export default Form40;
