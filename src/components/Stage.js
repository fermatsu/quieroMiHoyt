import { Arrow } from './Arrow';

export function Stage() {    
  let numArrows = 7;
  const rows = [];
  for (let i = 0; i < numArrows; i++) {      
      rows.push(<Arrow />);
  }
  return <tbody>
    <h1> Stage #X: </h1>
    {rows}
    <h2> Total: XX </h2>    
    <h2> Xs: XX </h2>    
    <h2> Hits: XX </h2>    
    <h2> Miss: XX </h2>    
    <h2> Avg: XX </h2>    
  </tbody>;    
}