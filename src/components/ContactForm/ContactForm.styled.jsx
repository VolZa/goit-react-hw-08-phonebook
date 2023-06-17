import styled from 'styled-components';
import {
  Form as FormikForm,
} from 'formik';

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 48px;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: 1px solid #101010;

  padding: 8px;
  // width: 96px;
  color: aliceblue;
  border-radius: 4px;
  border-color: transparent;
  font-size: 16px;
  font-weight: 700;
  font-family: Sofia Sans, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-transform: capitalize;
  background-color: #3771d2;
}
@media screen and (min-width: 768px) {
  .Form__Btn {
    width: 180px;
    font-size: 18px;
    padding: 11px;
  }

  :hover {
    background-color: #6085d3;
    color: #fdfdfd;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  }
`;
// border: 1px solid ${p => p.theme.colors.black};
// background-color: ${p => p.theme.colors.accent};
//     color: ${p => p.theme.colors.white};