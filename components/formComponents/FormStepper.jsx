import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Button,
  Grid,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

import ApplicationIdentifier from '../forms/ApplicationIdentifier';
import PortCodes from '../forms/PortCodes';
import SummaryHeaderGroup from '../forms/DE/SummaryHeaderGroup';
import ImportSummaryGroup from '../forms/DE/ImportSummaryGroup';
import ManufacturedProducedArticlesGroup from '../forms/DE/ManufacturedProducedArticlesGroup'


const FormStepper = () => {
  //check if Manufactured Produced Articles Group is Required
  const [isDrawback, setIsDrawback] = useState(false);
  const [isActionIndicator, setIsActionIndicator] = useState(false);

  //State the default state of the form to not completed!
  const [importDetailsCompleted, setImportDetailsCompleted] = useState(false);
  const [
    importClassificationGroupCompleted,
    setImportClassificationGroupCompleted,
  ] = useState(false);

  //change Import details form state to completed
  const form40Completed = (result) => {
    setImportDetailsCompleted(true);
    if (result === 'A') {
      setIsActionIndicator(true)
    } else{
        setIsActionIndicator(false);
    }
  };
  //Change import Classification Group state to Completed
  const importClassificationCompleted = () => {
    setImportClassificationGroupCompleted(true);
  };

  const handleDrawbackProvisionChange = (result) => {
    if (result >= 1 && result <= 23) {
      setIsDrawback(true);
    }
  };



  // set the titles for the form steps
  const steps = [
    'Application Identifier',
    'Port Codes',
    'Drawback Entry Summary Header Group',
    'Import Summary Group',
    'Manufactured/Produced Articles Group',
  ];
  // display the correct form
  const getStepDescription = (step) => {
    switch (step) {
      case 0:
        return <ApplicationIdentifier />;
        break;
      case 1:
        return <PortCodes />;
        break;
      case 2:
        return (
          <SummaryHeaderGroup
            handleDrawbackProvisionChange={handleDrawbackProvisionChange}
          />
        );
        break;
      case 3:
        return (
          <ImportSummaryGroup
            formState={form40Completed}
            importClassificationCompleted={importClassificationCompleted}
            importDetailsCompleted={importDetailsCompleted}
            importClassificationGroupCompleted={
              importClassificationGroupCompleted
            }
          />
        );
        break;
      case 4:
        return (
          <ManufacturedProducedArticlesGroup
            drawbackSet={isDrawback}
            actionIndicatorSet={isActionIndicator}
          />
        );
        break;
      default:
        return null;
    }
  };

  // initialize useRouter and store it in router variable
  const router = useRouter();

  //declear the default form values
  const defaultValues = {
    app_id_code_box1: '',
    app_id_code: '',
    depart_port_code: '',
    filer_code: '',
    remote_depart_port_code: '',
    processing_filer_office_code: '',
    remote_preparer_filter_code: '',
    remote_preparer_office_code: '',
    drawback_entry_summary: [],
    bond_details: [],
    import_summary_group: [
      {
        import_details: [],
        import_classification_group: [
          {
            import_classification: [],
            import_quantity_and_uom: [],
          },
        ],
        import_revenue_claimed: [],
      },
    ],
  };

  //create a variable to store the active form step
  const [activeStep, setActiveStep] = useState(0);

  //Create validation schema for the form
  const validationSchema = [
    //validation for step1
    yup.object({
      app_id_code_box1: yup.string().required('This field is required'),
      app_id_code: yup.string().required('Application ID Code is required'),
    }),
    yup.object({
      depart_port_code: yup
        .string(),
      app_id_code: yup
        .string()
        .required('Application Identifier Code is required'),
      filer_code: yup.string().required('Filer Code is required'),
      remote_depart_port_code: yup.string(),
      processing_filer_office_code: yup.string(),
      remote_preparer_filer_code: yup
        .string()
        .required('Remote Preparer Filer COde is required'),
      remote_preparer_office_code: yup.string(),
    }),
    yup.object().shape({
      drawback_entry_summary: yup.array().of(
        yup.object().shape({
          summary_filling_action_code: yup
            .string()
            .required('Summary Filling Action Code is required'),
          entry_filer: yup.string().required('Entry Filler Code is required'),
          drawback_filing_port: yup
            .string()
            .required('Drawback Filling Port is required'),
          entry_dc_num: yup
            .string()
            .required('Entry Number/Drawback Claim is required'),
          electronic_signature: yup
            .string()
            .required('Electronic Signature is required'),
          ci_ir_num_of_dc: yup
            .string()
            .required('Claimant ID/Import Record Number of Claim is required'),
          cert_for_valuation_of_dm: yup.string(),
          drawback_prov: yup.string(),
          electronic_mfg_pc: yup.string(),
          electronic_pc: yup.string(),
          bom_formular_cert: yup.string(),
          nafta_dc_indicator: yup.string(),
          su_wine_cert: yup.string(),
          os_tax_cert: yup.string(),
          bond_waiver_reason_code: yup.string(),
          bond_waiver_indicator: yup.string(),
          waiver_prior_notice: yup.string(),
          ot_waiver_indicator: yup.string(),
          cid_commercial_ruling: yup.string(),
          cid_commercial_indicator: yup.string(),
          booker_ref_num: yup.string(),
          accelerated_pymt_request_indicator: yup.string(),
          designated_np_num: yup.string(),
        })
      ),
      bond_details: yup.array().of(
        yup.object().shape({
          bond_type_code: yup.string().required('Bond Type Code is required'),
          bond_destination_type_code: yup
            .string()
            .required('Bond Destination Type Code is required'),
          surety_company_code: yup
            .string()
            .required('Surety Company Code is required'),
          stb_amount: yup.string(),
          stb_producer_amount_number: yup.string(),
        })
      ),
    }),
    yup.object().shape({
      import_summary_group: yup.array().of(
        yup.object().shape({
          import_details: yup.array().of(
            yup.object().shape({
              action_indicator: yup
                .string()
                .required('Action Indicator is Required'),
              drawback_accounting_mc: yup.string(),
              entry_filer_code: yup.string(),
              entry_number: yup.string(),
              manufacture_ruling_number: yup.string(),
              drawback_ec_of_delivery: yup.string(),
              basis_of_claim: yup.string(),
              manufacture_date_received: yup.string(),
              manufacture_date_used: yup.string(),
              cbp_es_line_number: yup.string(),
              itin: yup.string(),
            })
          ),
          import_classification_group: yup.array().of(
            yup.object().shape({
              import_classification: yup.array().of(
                yup.object().shape({
                  hts_number: yup
                    .string()
                    .required('Harmonized Tariff Schedule is required'),
                  article_description_text: yup.string(),
                })
              ),
              import_quantity_and_uom: yup.array().of(
                yup.object().shape({
                  quantity: yup.string().required('Quantity is required'),
                  unit_of_measurement_code: yup.string(),
                  allowable_quantity: yup.string(),
                  entered_goods_value_unit: yup.string(),
                  substituteed_value_per_unit: yup.string(),
                })
              ),
            })
          ),
          import_revenue_claimed: yup.array().of(
            yup.object().shape({
              accounting_class_code: yup
                .string()
                .required('Accounting Class is required'),
              calculated_amount: yup.string(),
              class_amount: yup.string(),
              adjusted_claim_amount: yup.string(),
              qualifier_indicator: yup.string(),
            })
          ),
        })
      ),
    }),
    yup.object().shape({})
  ];
  //validation schema to validate only the active form
  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: 'onChange',
  });
  const { handleSubmit, reset } = methods;

  //get the total number of steps
  const totalSteps = steps.length;

  //check if its the last step
  const isLastStep = activeStep === totalSteps - 1;
  // Move to the next form step || submit if its the last step
  const formSubmitHandler = (data) => {
    if (activeStep === totalSteps - 1) {
      reset();
      router.push('/thanks');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  //handle the back button on the form
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Box>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12}>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {getStepDescription(activeStep)}
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {activeStep > 0 && (
                          <Button
                            onClick={handleBack}
                            variant="contained"
                            type="button"
                            sx={{}}
                          >
                            Back
                          </Button>
                        )}

                        <Button variant="contained" type="submit" sx={{}}>
                          {isLastStep ? 'Submit' : 'Next'}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </FormProvider>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormStepper;
