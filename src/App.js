import { SearchAddressPage } from "./pages/SearchAddressPage/SearchAddressPage";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    font-family: 'Arial'
  }
  body {
  height: 100%;
  margin: 0;
  background-color: #0b162b;
  }
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <header className="App-header">
        <SearchAddressPage/>
      </header>
    </div>
  );
}

export default App;
