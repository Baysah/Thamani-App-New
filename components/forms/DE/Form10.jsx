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

const Form10 = ({ handleDrawbackProvisionChange }) => {
  const methods = useFormContext();
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: 'drawback_entry_summary',
  });
  const handleChange = () => {};

  const [agencyType, setAgencyType] = useState('');
  const [agenciesArray, setAgenciesArray] = useState([]);
  const [agencyTypeArray, setAgencyTypeArray] = useState([]);

  const AGENCY_TYPE_URL = `https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/provisionTypesForAgency?agency=${agencyType}`;
  const AGENCY_URL =
    'https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/provisionTypeAgencies';

  //Fetch agency data from API
  const fetchagencyType = async () => {
    try {
      const res = await fetch(AGENCY_URL);
      const agencies = await res.json();
      setAgencyTypeArray(agencies);
    } catch (err) {
      console.log(err.stack);
    }
  };

  const handleAgencyTypeChange = (result) => {
    setAgencyType(result);
  };
  //Run the fetchagencyType on load
  useEffect(() => {
    fetchagencyType();
  }, []);

  const AgencyTypeOptions = agencyTypeArray.map((option, index) => {
    return (
      <MenuItem key={index} value={option} id={index}>
        {option}
      </MenuItem>
    );
  });
  //fetch the agencies from api
  const fetchagency = async () => {
    try {
      const res = await fetch(AGENCY_TYPE_URL);
      const agencies = await res.json();
      setAgenciesArray(agencies);
    } catch (err) {
      console.log(err.stack);
    }
  };
  useEffect(() => {
    fetchagency();
  }, [agencyType]);

  const AgencyOptions = agenciesArray.map((option, index) => {
    return (
      <MenuItem key={index} value={option.code} id={option.id}>
        {option.code}-{option.name}
      </MenuItem>
    );
  });
  const arrayLength = fields.length;
  return (
    <Box>
      <ul>
        <Typography variant="h4">Drawback Entry Summary</Typography>
        {fields.map((item, index) => {
          return (
            <List key={index}>
              <ListItem>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.summary_filling_action_code`}
                      required={true}
                      label="Summary Filling Action Request"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.summary_filling_action_code
                      }
                    >
                      <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                      <MenuItem value="R">
                        Full Replacement of Drawback Entry Summary
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.summary_filling_action_code && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.summary_filling_action_code?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.summary_filling_action_code`}
                      label="Summary Filling Action Request Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.summary_filling_action_code
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.summary_filling_action_code
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.summary_filling_action_code.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.entry_filer`}
                      label="Entry Filer Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.entry_filer
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.entry_filer
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.entry_filer.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.drawback_filing_port`}
                      required={true}
                      label="Drawback Filling Port"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_filing_port
                      }
                    >
                      <MenuItem value={3901}>Chicago</MenuItem>
                      <MenuItem value={5301}>Houston</MenuItem>
                      <MenuItem value={1001}>New York</MenuItem>
                      <MenuItem value={2809}>San Francisco</MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.drawback_filing_port && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.drawback_filing_port?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.drawback_filing_port`}
                      label="Drawback Filling Port Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_filing_port
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_filing_port
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.drawback_filing_port.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.entry_dc_num`}
                      label="Entry Number/Drawback Claim"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.entry_dc_num
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.entry_dc_num
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.entry_dc_num.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.electronic_signature`}
                      required={true}
                      label="Electronic Signature"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_signature
                      }
                    >
                      <MenuItem value="X">
                        Filer's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.electronic_signature && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.electronic_signature?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.electronic_signature`}
                      label="Electronic Signature Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_signature
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_signature
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.electronic_signature.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.ci_ir_num_of_dc`}
                      label="Claimant ID/Import Record Number of Claim"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.ci_ir_num_of_dc
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.ci_ir_num_of_dc
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.ci_ir_num_of_dc.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.cert_for_valuation_of_dm`}
                      required={true}
                      label="Certification for Valuation of Destroy Merchandise"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cert_for_valuation_of_dm
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filler's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.cert_for_valuation_of_dm && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.cert_for_valuation_of_dm?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.cert_for_valuation_of_dm`}
                      label="Certification for Valuation of Destroy Merchandise Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cert_for_valuation_of_dm
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cert_for_valuation_of_dm
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.cert_for_valuation_of_dm.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.drawback_prov_box1`}
                      required={true}
                      label="Drawback Provision Box 1"
                      additionalFunction={handleAgencyTypeChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_prov_box1
                      }
                    >
                      {AgencyTypeOptions}
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.drawback_prov_box1 && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.drawback_prov_box1?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.drawback_prov`}
                      required={true}
                      label="Drawback Provision Box 2"
                      additionalFunction={handleDrawbackProvisionChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_prov
                      }
                    >
                      {AgencyOptions}
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.drawback_prov && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.drawback_prov?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.drawback_prov`}
                      label="Entry Number/Drawback Claim"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_prov
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.drawback_prov
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.drawback_prov.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.electronic_mfg_pc`}
                      required={true}
                      label="Electronic Manufacturing Petroleum Certification"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_mfg_pc
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filer's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.electronic_mfg_pc && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.electronic_mfg_pc?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.electronic_mfg_pc`}
                      label="Electronic Manufacturing Petroleum Certification Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_mfg_pc
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_mfg_pc
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.electronic_mfg_pc.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.electronic_pc`}
                      required={true}
                      label="Electronic Petroleum Certification"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_pc
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filer's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.electronic_pc && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.electronic_pc?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.electronic_pc`}
                      label="Electronic Petroleum Certification Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_pc
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.electronic_pc
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.electronic_pc.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.bom_formular_cert`}
                      required={true}
                      label="Bill of Materials/Formula Certification"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bom_formular_cert
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filler's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.bom_formular_cert && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.bom_formular_cert?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.bom_formular_cert`}
                      label="Bill of Materials/Formula Certification Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bom_formular_cert
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bom_formular_cert
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.bom_formular_cert.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.nafta_dc_indicator`}
                      required={true}
                      label="Nafta Drawback Claim Indicator"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.nafta_dc_indicator
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filler's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.nafta_dc_indicator && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.nafta_dc_indicator?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.nafta_dc_indicator`}
                      label="Nafta Drawback Claim Indicator Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.nafta_dc_indicator
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.nafta_dc_indicator
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.nafta_dc_indicator.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.su_wine_cert`}
                      required={true}
                      label="Substituted Unsued Wine Certification"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.su_wine_cert
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filler's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.su_wine_cert && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.su_wine_cert?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.su_wine_cert`}
                      label="Substituted Unsued Wine Certification Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.su_wine_cert
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.su_wine_cert
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.su_wine_cert.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.os_tax_cert`}
                      required={true}
                      label="Oil Spill Tax Certification"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.os_tax_cert
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="X">
                        Filler's Electronic Signature
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.os_tax_cert && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.os_tax_cert?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.os_tax_cert`}
                      label="Oil Spill Tax Certification Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.os_tax_cert
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.os_tax_cert
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.os_tax_cert.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.bond_waiver_indicator`}
                      required={true}
                      label="Bond Waiver Indicator"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_indicator
                      }
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value={0}>Bond waived/no required</MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.bond_waiver_indicator && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.bond_waiver_indicator?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.bond_waiver_indicator`}
                      label="Bond Waiver Indicator Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_indicator
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_indicator
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.bond_waiver_indicator.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.bond_waiver_reason_code`}
                      required={true}
                      label="Bond Waiver Reason Code"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_reason_code
                      }
                    >
                      <MenuItem value={995}>
                        Supplemental Duty Bills on Vessel Repair Entries
                      </MenuItem>
                      <MenuItem value={996}>
                        Fines, Penalty, or Liquidated Damage Bill
                      </MenuItem>
                      <MenuItem value={997}>
                        All Other Contingent Bills
                      </MenuItem>
                      <MenuItem value={998}>
                        Bills Secured - Other than Surety
                      </MenuItem>
                      <MenuItem value={999}>
                        No Surety, Unsecured Bills
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.bond_waiver_reason_code && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.bond_waiver_reason_code?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.bond_waiver_reason_code`}
                      label="Bond Waiver Reason Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_reason_code
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.bond_waiver_reason_code
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.bond_waiver_reason_code.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.waiver_prior_notice`}
                      required={true}
                      label="Waiver Prior Notice"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.waiver_prior_notice
                      }
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="Y">Yes</MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.waiver_prior_notice && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.waiver_prior_notice?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.waiver_prior_notice`}
                      label="Waiver Prior Notice Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.waiver_prior_notice
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.waiver_prior_notice
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.waiver_prior_notice.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.ot_waiver_indicator`}
                      required={true}
                      label="One Time Waiver Indicator"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.ot_waiver_indicator
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="Y">Yes</MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.ot_waiver_indicator && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.ot_waiver_indicator?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.ot_waiver_indicator`}
                      label="One Time Waiver Indicator Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.ot_waiver_indicator
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.ot_waiver_indicator
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.ot_waiver_indicator.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.cid_commercial_indicator`}
                      required={true}
                      label="Commercial Interchangeability/Commercial Indicator"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_indicator
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value="Y">
                        Requesting Accelerated Payment and Bond is required
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.cid_commercial_indicator && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.cid_commercial_indicator?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.cid_commercial_indicator`}
                      label="Commercial Interchangeability/Commercial Indicator"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_indicator
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_indicator
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.cid_commercial_indicator.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.cid_commercial_ruling`}
                      required={true}
                      label="Commercial Interchangeability/Commercial Ruling"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_ruling
                      }
                    >
                      <MenuItem value=" ">None</MenuItem>
                      <MenuItem value={0}>Claim by Claim</MenuItem>
                      <MenuItem value={1}>Non-Binding Ruling</MenuItem>
                      <MenuItem value={2}>
                        Binding Ruling approved by CBP HD
                      </MenuItem>
                      <MenuItem value={3}>CID Pending</MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.cid_commercial_ruling && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.cid_commercial_ruling?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.cid_commercial_ruling`}
                      label="Commercial Interchangeability/Commercial Ruling Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_ruling
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.cid_commercial_ruling
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.cid_commercial_ruling.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.booker_ref_num`}
                      label="Booker Reference Number"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.booker_ref_num
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.booker_ref_num
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.booker_ref_num.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CustomSelectField
                      control={control}
                      name={`drawback_entry_summary.${index}.accelerated_pymt_request_indicator`}
                      required={true}
                      label="Accelerated Payment Request Indicator"
                      additionalFunction={handleChange}
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.accelerated_pymt_request_indicator
                      }
                    >
                      <MenuItem value="A">Add Drawback Entry Summary</MenuItem>
                      <MenuItem value="R">
                        Full Replacement of Drawback Entry Summary
                      </MenuItem>
                    </CustomSelectField>
                    {methods.formState.errors.drawback_entry_summary?.[index]
                      ?.accelerated_pymt_request_indicator && (
                      <p className="error_helper_text">
                        {
                          methods.formState.errors.drawback_entry_summary?.[
                            index
                          ]?.accelerated_pymt_request_indicator?.message
                        }
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.accelerated_pymt_request_indicator`}
                      label="Accelerated Payment Request Indicator Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.accelerated_pymt_request_indicator
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.accelerated_pymt_request_indicator
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.accelerated_pymt_request_indicator.message
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInputField
                      name={`drawback_entry_summary.${index}.designated_np_num`}
                      label="Designater Notify Party Number Code"
                      fullWidth
                      error={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.designated_np_num
                      }
                      helperText={
                        methods.formState.errors.drawback_entry_summary?.[index]
                          ?.designated_np_num
                          ? methods.formState.errors.drawback_entry_summary?.[
                              index
                            ]?.designated_np_num.message
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
                  fullWidth
                  size="large"
                >
                  Delete
                </Button>
              </Box>
            </List>
          );
        })}
        {arrayLength < 1 && (
          <Box mt={2}>
            <Button
              variant="contained"
              type="button"
              onClick={() => {
                append({
                  summary_filling_action_code: '',
                  entry_filer: '',
                  drawback_filing_port: '',
                  entry_dc_num: '',
                  electronic_signature: '',
                  ci_ir_num_of_dc: '',
                  cert_for_valuation_of_dm: '',
                  drawback_prov_box1: '',
                  electronic_mfg_pc: '',
                  electronic_pc: '',
                  bom_formular_cert: '',
                  nafta_dc_indicator: '',
                  su_wine_cert: '',
                  os_tax_cert: '',
                  bond_waiver_reason_code: '',
                  bond_waiver_indicator: '',
                  waiver_prior_notice: '',
                  ot_waiver_indicator: '',
                  cid_commercial_ruling: '',
                  cid_commercial_indicator: '',
                  booker_ref_num: '',
                  accelerated_pymt_request_indicator: '',
                  designated_np_num: '',
                });
              }}
            >
              Add Drawback Entry Summary
            </Button>
          </Box>
        )}
      </ul>
    </Box>
  );
};

export default Form10;
