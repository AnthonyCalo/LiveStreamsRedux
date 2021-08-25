import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header'
import history from '../history';

//key
//248921434882-1bgogt2sg722o9eeba88h9968t72g439.apps.googleusercontent.com
const App=()=>{
    return(
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path='/' component={StreamList}/>
                    <Route exact path='/streams/new' component={StreamCreate}/>
                    <Route exact path='/streams/edit/:id' component={StreamEdit}/>
                    <Route exact path='/streams/:id' component={StreamShow}/>
                    <Route exact path='/streams/delete/:id' component={StreamDelete}/>
                </Switch>
            </Router>
       
        </div>
        )
}

export default App;