import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import '@progress/kendo-theme-default/dist/all.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid
        style={{ height: '400px' }}
      >
        <Column field="ProductID" title="ID" width="40px" />
        <Column field="ProductName" title="Name" width="250px" />
      </Grid>
    </div>
  );
}

export default App;
