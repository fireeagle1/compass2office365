import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(12),
  },
  steps: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttons: {
    paddingBottom: theme.spacing(2),
  }
}));

function getSteps() {
  return ['Compass', 'Office365', 'Output'];
}


function handleChange() {

}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return ( 
      <div>
        <p>Download the 'District Members Report' (.csv) from Compass</p>
        <input
          accept="pdf/*"
          className="hidden"
          id="contained-button-file"
          multiple
          type="file"
          onChange={ handleChange } 
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="secondary" size="large" component="span">
            Upload
          </Button>
        </label>
      </div>);
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="App">
      <div className="App-logo">
        <Container maxWidth="sm">
        <img height="100px" src="https://static.wixstatic.com/media/adc2b7_ede0538a990348b3ad39cee9b256c9cf~mv2.png/v1/fill/w_490,h_180,al_c,q_85,usm_0.66_1.00_0.01/gmelogo%20white%20transparent.webp"></img>
        </Container>
      </div>
      <Container maxWidth="sm">
        
        
        <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.steps}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className={classes.buttons}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Container>
    </div>
  );
}

export default App;
