import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=2";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>loading ...</div>
        ) : (
          <div>
            {this.state.people.map((person) => (
              <div key={person.login.uuid}>
                <div>first name : {person.name.first}</div>
                <div>last name : {person.name.last}</div>
                <img src={person.picture.large} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
