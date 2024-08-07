function Form(){

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastro realizado!")
    }
    
    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </>
    )


}

export default Form