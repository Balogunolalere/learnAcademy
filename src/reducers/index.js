import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ClassReducer from './ClassReducer'
import CurriculumReducer from './CurriculumReducer'
import AnnouncementReducer from './AnnouncementReducer'
import LectureReducer from './LectureReducer'

export default combineReducers({
    auth: AuthReducer,
    ClassReducer,
    CurriculumReducer,
    AnnouncementReducer,
    LectureReducer
})