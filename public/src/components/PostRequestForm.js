import React, { Component } from 'react';

class PostRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      userCreated: null,
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.username || !this.state.password) {
      this.setState({ error: 'Por favor, completa todos los campos.' });
      return;
    }

    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userCreated: response, error: null });
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({ userCreated: null, error: 'Hubo un error al crear el usuario.' });
      });
  };

  render() {
    const { userCreated, error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            Nombre de usuario:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <button type="submit">Enviar</button>
        </form>

        {userCreated && (
          <div>
            <h2>Usuario Creado</h2>
            <p>Nombre: {userCreated.name}</p>
            <p>Nombre de usuario: {userCreated.username}</p>
          </div>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}

export default PostRequestForm;
