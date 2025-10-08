/* eslint-disable import/prefer-default-export */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route, Navigate, Routes,
} from 'react-router-dom';

import {
  AppProvider,
  ErrorPage,
  PageWrap,
} from '@edx/frontend-platform/react';
import store from 'data/store';
import {
  APP_READY,
  APP_INIT_ERROR,
  initialize,
  subscribe,
  mergeConfig,
} from '@edx/frontend-platform';

import { configuration } from './config';

import messages from './i18n';

import App from './App';
import NoticesWrapper from './components/NoticesWrapper';
import ExploreCourses from './containers/ExploreCourses';
import SingleCourse from './components/SingleCourse';
import ProviderPage from './components/ProviderPage';
import InstructorPage from './components/InstructorPage';

subscribe(APP_READY, () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <AppProvider store={store}>
        <NoticesWrapper>
          <Routes>
            <Route path="/" element={<PageWrap><App /></PageWrap>}/>   
             <Route path="/explore-courses/" element={<PageWrap><ExploreCourses /></PageWrap>}>            
              <Route path="course-details/:id" element={<PageWrap><SingleCourse/></PageWrap>}/>
              <Route path="provider-details/:id" element={<PageWrap><ProviderPage /></PageWrap>}/>                
             </Route>

            <Route path="/course-details/:id" element={<PageWrap><SingleCourse /></PageWrap>}/>
            <Route path="/provider-details/:id" element={<PageWrap><ProviderPage /></PageWrap>}/>
            {/* <Route path="/instructor-details/:id" element={<PageWrap><InstructorPage /></PageWrap>}/> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
        </NoticesWrapper>
      </AppProvider>
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});

export const appName = 'LearnerHomeAppConfig';

initialize({
  handlers: {
    config: () => {
      mergeConfig(configuration, appName);
    },
  },
  messages,
  requireAuthenticatedUser: true,
});
