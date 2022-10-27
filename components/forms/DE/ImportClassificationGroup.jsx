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
import Form41 from './Form41';
import Form42 from './Form42';

const ImportClassificationGroup = ({ nestedIndex, setFormState }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: `import_summary_group[${nestedIndex}].import_classification_group`,
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
                <Grid item xs={12}>
                  <Form41 nestedIndex={k} />
                </Grid>
                <Grid item xs={12}>
                  <Form42 nestedIndex={k} setFormState={setFormState}  />
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
                fullWidth
                onClick={() => remove(k)}
                size="large"
              >
                Delete Import Classification Group
              </Button>
            </Box>
          </List>
        );
      })}
      {arrayLength < 8 && (
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
            Add Import Classification Group
          </Button>
        </Box>
      )}
    </>
  );
};

export default ImportClassificationGroup;
