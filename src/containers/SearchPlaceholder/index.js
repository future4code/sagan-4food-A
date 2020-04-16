import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setFilteredRestaurants, setInputSearch, getRestaurants } from '../../actions/index'

import { InputSearchStyled, InputWrapper } from './styles'


class SearchPlaceholder extends Component {
  

    onChangeInputSearch = (event) => {
        this.props.setInputSearch(event.target.value)
    }
    
    render() {

        // console.log(this.props.restaurants)

        return (

            <InputWrapper autoComplete="on">
                <InputSearchStyled
                    value={this.props.inputSearch}
                    placeholder="Restaurante"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.onChangeInputSearch}
                    onKeyDown={this.onPressEnter}
                />
            </InputWrapper>

        )
    }

}

const mapStateToProps = (state) => ({
    inputSearch: state.filterSearch.inputSearch
})

const mapDispatchToProps = (dispatch) => ({
    getRestaurants: () => dispatch(getRestaurants()),
    setFilteredRestaurants: (restaurants) => dispatch(setFilteredRestaurants(restaurants)),
    setInputSearch: (inputData) => dispatch(setInputSearch(inputData))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlaceholder)