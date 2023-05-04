import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searcQuery: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ searcQuery: query });
  };
  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    if (this.state.searcQuery.trim() === '') {
      alert('Введите запрос');
      return;
    }
    this.props.onSubmit(this.state.searcQuery);
    // this.setState({ searcQuery: '' });
  };

  // onClear = () => {
  //   setValue('');
  // };

  render() {
    return (
      <SearchbarHeader className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span className="buttonLabel">Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            // value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
