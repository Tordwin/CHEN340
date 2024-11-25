import * as React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';

function handleClick(event, href) {
  event.preventDefault();
  window.location.href = href;
}

export default function IconBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);


  if (location.pathname === '/' || location.pathname === '/home'){
    return null;
  }

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#e0e1dd', margin: 3 }}>
        <Link
          href="/"
          sx={{ display: 'flex', alignItems: 'center', color: '#e0e1dd' }}
          onClick={(event) => handleClick(event, "/")}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {pathnames.map((value, index) => {
          const href = '/' + pathnames.slice(0, index + 1).join('/');
          return (
            <Link
              key={href}
              href={href}
              sx={{ color: '#e0e1dd' }}
              onClick={(event) => handleClick(event, href)}
            >
              <Typography>{value}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
