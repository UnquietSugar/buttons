import { GridView } from "./GridView";

const App = () => (
  <GridView
    positionProps={[
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 2, col: 3 },
      { row: 3, col: 1 },
      { row: 3, col: 2 },
      { row: 3, col: 3 },
    ]}
  />
);

export default App;
