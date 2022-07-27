import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {Navbar} from '../ui';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <div>
        <Routes>

            <Route 
              path="login" 
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
            } />

  
            {/* <Route path="login" element={<LoginPage/>} /> */}

            <Route 
              path='/*' 
              element = {
                <PrivateRoute>
                  <HeroesRoutes/>
                </PrivateRoute>
              } 
            />
            {/* <Route path='/*' element={<HeroesRoutes/>}/> */}

        </Routes>
    </div>
  )
}