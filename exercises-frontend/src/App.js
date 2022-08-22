import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import pages, components, and style
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import Navigation from './components/Navigation';
import './App.css';

function App() {

    // set up state variable for exercise to edit
    const [exercise, setExercise] = useState({});

    // display app
    return (
        <Router>

            <header>
                <h1>Fitness Buddy</h1>
                <p>When you're struggling with exercise, you could use a buddy!</p>
            </header>

            <Navigation />

            <main>
                <Route path="/" exact>
                    <HomePage setExercise={setExercise} />
                </Route>

                <Route path="/create-exercise">
                    <CreatePage />
                </Route>

                <Route path="/edit-exercise">
                    <EditPage exercise={exercise} />
                </Route>
            </main>

            <footer>
                <p>&copy; 2022 Blake Hakkila</p>
            </footer>

        </Router>
    );
}

export default App;