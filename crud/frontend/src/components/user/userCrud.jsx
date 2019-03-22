import React, { Component } from 'react'
import Main from '../template/Main'

const headreProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headreProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}