import React from 'react';
import './App.css';
import basketballTeams from './CollegeBasketballTeams.json';

interface TeamProps {
  // interface to define the data I need
  school: string;
  name: string;
  city: string;
  state: string;
}

const teams = basketballTeams.teams; // accessing the data from the ./CollegeBasketballTeams.json' file

function Welcome() {
  return <h1>The NCAA Basketball Team List</h1>; // The page heading
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props; // to access the info for one team

    return (
      // Display the info of a team
      <div className="card">
        <img />
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teams.map(
        (
          oneTeam, // Iterate over each item in the teams (the teams data from the imported json)
        ) => (
          <Team {...oneTeam} />
        ),
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
