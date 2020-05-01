import React from 'react';
import ReactDOM from 'react-dom';

function SearchResultRow(props) {
  return (
    <tr>
      <td>{props.content.name}</td>
      <td>{props.content.summary}</td>
      <td><button onClick={() => alert(props.content.name)}>detail</button></td>
    </tr>
  );
}

function App(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>summary</th>
          <th>detail</th>
        </tr>
      </thead>
      <tbody>
        {props.searchResults.map(
          searchResult => <SearchResultRow content={searchResult} key={searchResult.name} />
        )}
      </tbody>
    </table>
  );
}

var searchResults = [
  {
    name: 'Alex',
    summary: 'frontend engineer'
  },
  {
    name: 'Barbara',
    summary: 'backend engineer'
  }
];

ReactDOM.render(<App searchResults={searchResults} />, document.getElementById('app'));