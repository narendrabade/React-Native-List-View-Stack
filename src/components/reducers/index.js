import { combineReducers } from 'redux';
import LibraryReduder from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReduder,
    selectedLibraryId: SelectionReducer
}); 