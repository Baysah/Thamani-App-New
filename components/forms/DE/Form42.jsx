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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomInputField from '../../formComponents/CustomInputField';
import CustomSelectField from '../../formComponents/CustomSelectField';

const Form42 = ({ nestedIndex, setFormState }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: `import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom`,
  });

  const arrayLength = fields.length;
  const handleSelectChange = () => {};

  const [form41Completed, setForm41Completed] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem(
      'Form41_Completed',
      JSON.stringify(form41Completed)
    );
  }, [form41Completed]);

  return (
    <ul>
      <Typography variant="h5" color="primary">
        Import Quantity & Unit of Measure
      </Typography>
      {fields.map((item, k) => {
        return (
          <List key={k}>
            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].quantity`}
                        label="Quantity"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k].quantity
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k].quantity
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_quantity_and_uom?.[k].quantity.message
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <CustomSelectField
                        control={control}
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].unit_of_measurement_code`}
                        required={true}
                        label="Unit of Measure"
                        additionalFunction={setFormState}
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k].allowable_quantity
                        }
                      >
                        <MenuItem value="A">
                          Add Drawback Entry Summary
                        </MenuItem>
                        <MenuItem value="R">
                          Full Replacement of Drawback Entry Summary
                        </MenuItem>
                      </CustomSelectField>
                      {methods.formState.errors.import_summary_group?.[
                        nestedIndex
                      ]?.import_classification_group?.[nestedIndex]
                        .import_quantity_and_uom?.[k].allowable_quantity && (
                        <p className="error_helper_text">
                          {
                            import_summary_group?.[nestedIndex]
                              ?.import_classification_group?.[nestedIndex]
                              .import_quantity_and_uom?.[k].allowable_quantity
                              ?.message
                          }
                        </p>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].unit_of_measurement_code`}
                        label="Unit of Mesure Code"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .unit_of_measurement_code
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .unit_of_measurement_code
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_quantity_and_uom?.[k]
                                .unit_of_measurement_code.message
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].allowable_quantity`}
                        label="Allowable Quantity"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k].allowable_quantity
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k].allowable_quantity
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_quantity_and_uom?.[k].allowable_quantity
                                .message
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].entered_goods_value_unit`}
                        label="Entered (Goods) Value per Unit"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .entered_goods_value_unit
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .entered_goods_value_unit
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_quantity_and_uom?.[k]
                                .entered_goods_value_unit.message
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_quantity_and_uom[${k}].substituteed_value_per_unit`}
                        label="Substituted Value per Unit"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .substituteed_value_per_unit
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_quantity_and_uom?.[k]
                            .substituteed_value_per_unit
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_quantity_and_uom?.[k]
                                .substituteed_value_per_unit.message
                            : null
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
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
                      startIcon={<DeleteForeverIcon />}
                    >
                      Delete
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        );
      })}
      {arrayLength < 3 && (
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
                quantity: '',
                unit_of_measurement_code: '',
                allowable_quantity: '',
                entered_goods_value_unit: '',
                substituteed_value_per_unit: '',
              });
            }}
          >
            Add Import Quantity & UOM
          </Button>
        </Box>
      )}
    </ul>
  );
};

export default Form42;
