import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const Dashboard = () => {
  return (
    <Grid
      style={{ height: '400px' }}
    >
      <Column field="ProductID" title="ID" width="40px" />
      <Column field="ProductName" title="Name" width="250px" />
    </Grid>
  );
}

export default Dashboard;
