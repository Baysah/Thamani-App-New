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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Form40 from './Form40';
import ImportClassificationGroup from './ImportClassificationGroup';
import Form43 from './Form43';

const ImportSummaryGroup = ({
  formState,
  importDetailsCompleted,
  importClassificationGroupCompleted,
  importClassificationCompleted,
}) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: 'import_summary_group',
  });

  return (
    <ul>
      <Typography variant="h4">Import Summary Group</Typography>
      <Typography variant="p" color={'red'}>
        Please fill up all forms in order
      </Typography>
      {fields.map((item, index) => {
        return (
          <List key={index}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="import-detail-content"
                id="import-detail-content"
              >
                <Typography>Import Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Form40 nestedIndex={index} setFormState={formState} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="import-classification-group-content"
                id="import-classification-group-content"
              >
                <Typography>Import Classification Group</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {importDetailsCompleted ? (
                  <ImportClassificationGroup
                    nestedIndex={index}
                    setFormState={importClassificationCompleted}
                  />
                ) : (
                  <Typography variant="p" color="red">
                    Please fill import details section first
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="import-revenue-claimed-content"
                id="import-revenue-claimed-content"
              >
                <Typography>Import Revenue Claimed</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {importClassificationGroupCompleted ? (
                  <Form43 nestedIndex={index} />
                ) : (
                  <Typography variant="p" color="red">
                    Please complete Import Classification Group Before filling
                    out this form
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </List>
        );
      })}
    </ul>
  );
};

export default ImportSummaryGroup;
