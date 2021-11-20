import { Box } from '@mui/system';
import './App.css';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import TakeNoteArea from './components/TakeNoteArea';

function App() {
    return (
        <Box className="App">
            <Header />
            <SearchArea />
            <TakeNoteArea />
        </Box>
    );
}

export default App;
