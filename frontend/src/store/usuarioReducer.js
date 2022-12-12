const initialValue = {
    idUsuario: null,
    admin: null,
}

function usuarioReducer(state = initialValue, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, idUsuario: action.idUsuario, admin: action.admin }
        case 'LOGOUT':
            return { ...state, idUsuario: null, role: null }
        default:
            return state;
    }
}

export default usuarioReducer;