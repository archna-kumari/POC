import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputForm from './FormValidation'

export default function Forms() {
  return (
    <Container maxWidth="lg">
      <Typography component="div" variant="h4" style={{ backgroundColor: '#fff', height: '100vh', marginTop: '120px' }} >
        Forms Component goes here
        <InputForm />
      </Typography>
    </Container>
  )
}

