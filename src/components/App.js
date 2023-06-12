import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/register/Register'));
const LoginPage = lazy(() => import('../pages/login/Login'));
// const TasksPage = lazy(() => import('../pages/tasks/Tasks'));
const ContactsPage = lazy(() => import('../pages/ContactsBook/ContactsBook'));

export const App = () => {
   const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);

   return isRefreshing ? (
      <b>Refreshing user...</b>
   ) : (
      <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
         <Route
            path="/register"
            element={
               <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
         />
         <Route
            path="/login"
            element={
               <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
         />
         <Route
            path="/contacts"
            element={
               <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
         />
         <Route path='*' element={<Navigate to="/" />} />
         </Route>
      </Routes>
   );
};
