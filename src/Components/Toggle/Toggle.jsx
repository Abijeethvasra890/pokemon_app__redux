import "./Toggle.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '@/features/theme/themeSlice';

export const Toggle = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleToggleDarkMode = () => {
      if(isAuthenticated){
        dispatch(toggleDarkMode());
      }else{
        alert("User is not Authenticated");
      }
      
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={darkMode}
        onChange={handleToggleDarkMode}
      />
      <label htmlFor="check"></label>
    </div>
  );
};