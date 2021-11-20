import { Box } from '@mui/system';
import './App.css';
import DisplayNotes from './components/DisplayNotes';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import TakeNoteArea from './components/TakeNoteArea';

function App() {
    return (
        <Box className="App">
            <Header />
            <SearchArea />
            <TakeNoteArea />
            <DisplayNotes />
        </Box>
    );
}

export default App;
