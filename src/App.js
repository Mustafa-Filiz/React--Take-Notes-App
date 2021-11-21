import { Box } from '@mui/system';
import './App.css';
import DisplayNotes from './components/DisplayNotes';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import TakeNoteArea from './components/TakeNoteArea';

function App() {
    return (
        <Box className="App">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '80%',
                    margin: 'auto',
                }}
            >
                <Header />
                <SearchArea />
                <TakeNoteArea />
                <DisplayNotes />
            </Box>
        </Box>
    );
}

export default App;
