import { ButtonGroup, Button } from '@progress/kendo-react-buttons';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const Dashboard = () => {
  return (
    <div id="Dashboard" className="dashboard-page main-content">
      <div className="card-container grid">
        <h3 className="card-title">Title</h3>
        <div className="card-component">
          <Grid
            style={{ height: '400px' }}
          >
            <Column field="ProductID" title="ID" width="40px" />
            <Column field="ProductName" title="Name" width="250px" />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
