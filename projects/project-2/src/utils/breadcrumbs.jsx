import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event, href) {
  event.preventDefault();
  window.location.href = href;
}

export default function IconBreadcrumbs() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#e0e1dd', margin: 3} }>
        <Link
          href="/"
          sx={{ display: 'flex', alignItems: 'center', color: '#e0e1dd' }}
          onClick={(event) => handleClick(event, "/")}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
      </Breadcrumbs>
    </div>
  );
}
