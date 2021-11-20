import { Box } from '@mui/system';
import './App.css';
import Header from './components/Header';
import SearchArea from './components/SearchArea';

function App() {
    return (
        <Box className="App">
            <Header />
            <SearchArea />
        </Box>
    );
}

export default App;
