import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogoSvg from './logo.svg';

const styles = {
  logoImg: {
    maxWidth: '100%',
    height: 'auto',
  },
};

const Logo = props => <img className={props.classes.logoImg} src={LogoSvg} />;

export default withStyles(styles)(Logo);
