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

const Form41 = ({ nestedIndex }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: `import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_classification`,
  });

  const [form41Completed, setForm41Completed] = useState(false);

  

  useEffect(() => {
    window.sessionStorage.setItem(
      'Form41_Completed',
      JSON.stringify(form41Completed)
    );
  }, [form41Completed])
  
  const form41Created = () => {
    console.log('Form 41 was created');
    setForm41Completed(true);
  };

  const arrayLength = fields.length;
  const handleSelectChange = () => {};

  return (
    <ul>
      <Typography variant="h5" color="primary">
        Import Classification
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
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_classification[${k}].hts_number`}
                        label="Harmonized Tariff Schedule"
                        fullWidth
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_classification?.[k].hts_number
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_classification?.[k].hts_number
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_classification?.[k].hts_number.message
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomInputField
                        name={`import_summary_group[${nestedIndex}].import_classification_group[${nestedIndex}].import_classification[${k}].article_description_text`}
                        label="Acticle Description Text"
                        fullWidth
                        multiline={true}
                        rows={4}
                        error={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_classification?.[k].article_description_text
                        }
                        helperText={
                          methods.formState.errors.import_summary_group?.[
                            nestedIndex
                          ]?.import_classification_group?.[nestedIndex]
                            .import_classification?.[k].article_description_text
                            ? methods.formState.errors.import_summary_group?.[
                                nestedIndex
                              ]?.import_classification_group?.[nestedIndex]
                                .import_classification?.[k]
                                .article_description_text.message
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
      {arrayLength < 2 && (
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
                hts_number: '',
                article_description_text: '',
              });
              form41Created();
            }}
          >
            Add Import Classification
          </Button>
        </Box>
      )}
    </ul>
  );
};

export default Form41;
