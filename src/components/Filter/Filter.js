import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setValue } from 'redux/filter/filterSlice';

export const Filter = () => {
   const dispatch = useDispatch();
   const filter = useSelector(getFilter);
   return (
      <>
         <label>Find contacts by name<br/>
            <Input 
               type="text" 
               name='filter' 
               value={filter}           
               onChange={(e) => {dispatch(setValue (e.currentTarget.value.toLowerCase()))}}
            />
         </label>         
      </>
   ); 
} 
