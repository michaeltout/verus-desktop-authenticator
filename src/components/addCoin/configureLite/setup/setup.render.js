import { Button } from '@material-ui/core';
import React from 'react';
import ProtectedInputForm from '../../../ProtectedInputForm'

export const SetupRender = function() {
  return (
    <div style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      { this.state.seedGenerator ? SetupRenderSeedGenerator.call(this) : SetupRenderChoices.call(this) }
    </div>
  );
}

export const SetupRenderChoices = function() {
  return (
    <React.Fragment>
      <ProtectedInputForm 
        heading="Enter an existing seed"
        multiline={true}
        onSubmit={this.submitSeed}
        inlineSubmit={true}
      />
      <div
        className="d-lg-flex flex-column justify-content-lg-center align-items-lg-center"
      >
        <h1
          className="text-break text-center d-md-flex justify-content-md-center align-items-md-center"
          style={{
            marginBottom: 0,
            color: "rgb(0,0,0)",
            fontSize: 16,
            width: "max-content",
            paddingTop: 20,
            paddingBottom: 40,
            maxWidth: "100%"
          }}
        >
          {"or"}
        </h1>
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{
          fontSize: 14,
          backgroundColor: "rgb(49, 101, 212)",
          borderWidth: 1,
          borderColor: "rgb(49, 101, 212)"
        }}
        onClick={ this.toggleSeedGenerator }
      >
        {"Generate a New Seed"}
      </Button>
    </React.Fragment>
  )
}

export const SetupRenderSeedGenerator = function() {
  return (
    <ProtectedInputForm 
      heading="Generate a New Seed"
      submitBtnText="Continue"
      multiline={true}
      onSubmit={this.submitSeed}
      confirmHeading="Confirm Seed"
      confirm={true}
      confirmBtnText="Confirm"
      seedGenerator={true}
    />
  )
}


