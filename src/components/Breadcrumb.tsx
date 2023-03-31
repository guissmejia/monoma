import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import { BreadCrumbType } from '../models/Breadcrumb';

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  event.preventDefault();
}

const Breadcrumb = ({ pathParams }: BreadCrumbType) => {
  return (
    <div role="presentation" onClick={handleClick} style={styles.BreadcrumbContainer}>
      <Breadcrumbs aria-label="breadcrumb" sx={styles.Breadcrumb}>
        <Typography gutterBottom variant="inherit" component="span">
          PokeAPI
        </Typography>
        <Link color="inherit" to='/dashboard'>
          Home
        </Link>
        {pathParams?.map((path, index) => {
          return (
            <>
              {path.route ? (
                <Link color="inherit" to={path.route}>
                  {path.name}
                </Link>
              ) : (
                <Typography gutterBottom variant="inherit" component="span">
                  {path.name}
                </Typography>
              )}
            </>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

const styles = {
  BreadcrumbContainer: {
    padding: '1em 0',
  },
  Breadcrumb: {
    width: '100%',
    margin: '1em 0',
    padding: '8px',
    background: '#edf2f7',
    borderRadius: '5px',
    boxSizing: 'border-box',
    'li':{
      'a': {
        color: 'rgba(0, 0, 0, 0.6)'
      }
    }
  }
}

export default Breadcrumb