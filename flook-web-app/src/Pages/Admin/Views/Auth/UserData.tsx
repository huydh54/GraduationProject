import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { LoginSchema } from '../../../../Functions/Validator';
import { columnsUsers } from '../../../../Components/TypeColums';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import TabContext from '@mui/lab/TabContext';
import FormLabel from '@mui/material/FormLabel';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import StepContent from '@mui/material/StepContent';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';

import TextFieldSearch from '../../../../Components/TextFieldSearch';
import WrapperDiaLog from '../../../../Components/WrapperDiaLog';
import InputCustom from '../../../../Components/TextFieldCustom';
import TableCustom from '../../../../Components/TableCustom';
import Selector from '../../../../Store/Selector';
import Action from '../../../../Store/Actions';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow: theme.palette.mode === 'dark' ? '0 0 0 1px rgb(16 22 26 / 40%)' : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))' : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

const selectRoles = [
  { id: 1, name: 'users' },
  { id: 2, name: 'authors' },
  { id: 3, name: 'voice actor' },
  { id: 4, name: 'collaborators' },
  { id: 5, name: 'root admin' },
  { id: 6, name: 'data admin' },
  { id: 7, name: 'app admin' },
  { id: 8, name: 'service admin' },
];



function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const RenderForm: React.FC = () => {
  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(LoginSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(0);

  const onSubmit = (data: any) => {
    console.log('values', data);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Info user</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.displayName} field="displayName" label="DisplayName" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.phoneNumber} field="phoneNumber" label="phoneNumber" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.userName} field="userName" label="UserName" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.email} field="email" label="Email" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.password} field="password" label="Password" />
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <button className="handle-next-button" type="submit" onClick={handleNext}>
                  <span className="handle-next-button__title">Continue</span>
                  <span className="handle-next-button__icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Grid>
            </Grid>
            <Box></Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Choose other</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="demo-customized-radios">Vip</FormLabel>
                  <RadioGroup row defaultValue="default" aria-labelledby="demo-customized-radios" name="customized-radios">
                    <FormControlLabel value="default" control={<BpRadio />} label="No vip" />
                    <FormControlLabel value="vip1" control={<BpRadio />} label="Vip 1" />
                    <FormControlLabel value="vip2" control={<BpRadio />} label="Vip 2" />
                    <FormControlLabel value="vip2" control={<BpRadio />} label="Vip 3" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="demo-customized-radios">Gender</FormLabel>
                  <RadioGroup row defaultValue="female" aria-labelledby="demo-customized-radios" name="customized-radios" sx={{ display: 'flex' }}>
                    <FormControlLabel value="female" control={<BpRadio />} label="Female" />
                    <FormControlLabel value="male" control={<BpRadio />} label="Male" />
                    <FormControlLabel value="other" control={<BpRadio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="demo-customized-radios">IsActive</FormLabel>
                  <RadioGroup row defaultValue="true" aria-labelledby="demo-customized-radios" name="customized-radios">
                    <FormControlLabel value="true" control={<BpRadio />} label="Active" />
                    <FormControlLabel value="false" control={<BpRadio />} label="No active" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <button className="handle-next-button" type="submit" onClick={handleNext}>
                  <span className="handle-next-button__title">Continue</span>
                  <span className="handle-next-button__icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Choose role</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextFieldSearch register={register} setValue={setValue} options={selectRoles} field="roles" label="roles" placeholder="Search" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldSearch register={register} setValue={setValue} options={selectRoles} field="roles" label="status" placeholder="Status" />
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <button className="handle-next-button" type="submit" onClick={handleNext}>
                  <span className="handle-next-button__title">Continue</span>
                  <span className="handle-next-button__icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Choose Picture</StepLabel>
          <StepContent></StepContent>
        </Step>
      </Stepper>
    </form>
  );
};

const InportFile: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const Input = styled('input')({ display: 'none' });
  const handleImport = () => {
    setLoading(true);
  };
  return (
    <Fragment>
      {loading && <LinearProgress color="secondary" sx={{ transform: 'translateY(-5px)' }} />}

      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Typography>Select File</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button fullWidth component="span" variant="outlined">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography>Select Input File Type</Typography>
          </Grid>
          <Grid className="card-box" item xs={12} sm={6}>
            <label className="card">
              <input className="radio-card" name="plan" type="radio" defaultChecked />
              <span className="plan-details">
                <span className="plan-type">Json</span>
              </span>
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label className="card">
              <input name="plan" className="radio-card" type="radio" />
              <span className="plan-details" aria-hidden="true">
                <span className="plan-type">CSV</span>
              </span>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <button className="handle-next-button" onClick={handleImport}>
          <span className="handle-next-button__title">Import</span>
          <span className="handle-next-button__icon">{loading ? <CircularProgress color="success" sx={{ p: 1 }} /> : <i className="bx bx-send"></i>}</span>
        </button>
      </DialogActions>
    </Fragment>
  );
};

const DialogUser: React.FC = () => {
  const [tab, setTap] = useState<string>('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTap(newValue);
  };
  return (
    <Box sx={{ width: '450px', height: 'auto', typography: 'body1' }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Manual Input" value="1" />

            <Tab label="Import file" value="2" sx={{ border: 'none' }} />

            <Tab label="Insert document" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0 }}>
          <RenderForm />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <InportFile />
        </TabPanel>
        <TabPanel value="3">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};


const UserData: React.FC = () => {
  const arrayUser = Selector.auth.DataManyUser();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.auth.FindUser(''));
  }, []);
  console.log('arrayUser', arrayUser)
  return (
    <Box sx={{width: '100%', height: '100%'}}>
      <WrapperDiaLog Component={DialogUser}/>
      <TableCustom 
        title="User Data" 
        array={arrayUser} 
        columns={columnsUsers} 
      />
   
    </Box>
  );
};

export default UserData;
