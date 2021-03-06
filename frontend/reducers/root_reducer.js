import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TodoReducer from './todo_reducer';
import ProjectsReducer from './project_reducer';
import CommentsReducer from './comments_reducer';
import EventsReducer from './events_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  todo: TodoReducer,
  projects: ProjectsReducer,
  comments: CommentsReducer,
  events: EventsReducer
});

export default RootReducer;
