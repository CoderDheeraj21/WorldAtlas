import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'

export const ErrorPage = () => {

    const error = useRouteError();

  return (
    <div>
        <h1>Oops! An error occured</h1>
        {
            error && <p>{error.data}</p>
        }
        <NavLink to='/' >
            <button className=''>Go Home</button>
        </NavLink>
    </div>
  )
}
