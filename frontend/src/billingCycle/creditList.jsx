import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field } from "redux-form";

import Input from '../common/form/input'

class CreditList extends Component{
    renderRows(){
        return(
            <tr>
                <td><Field component={Input} name='credits[0].name' 
                    readOnly={this.props.readOnly} placeholder='Informe o Nome' /></td>
                <td><Field component={Input} name='credits[0].value' 
                    readOnly={this.props.readOnly} type='number' placeholder='Informe o Valor' /></td>
                <td>
                    <button type='button' className='btn btn-sucess'><i className="fa fa-plus"></i></button>
                    <button type='button' className='btn btn-warning'><i className="fa fa-clone"></i></button>
                    <button type='button' className='btn btn-danger'><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList