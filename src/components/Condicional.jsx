import { useState } from 'react'

function Condicional() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    
    }

    function limparEmail() {
        setUserEmail('')
    }

    
    return (
        <>
            <h2>Cadastre o seu E-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu E-mail:" 
                onChange={(e) => setEmail(e.target.value)} 
                />
            <button type= "submit" onClick={enviarEmail}>
                Enviar E-mail
            </button>
            {userEmail &&(
                <div>
                    <p>o E-mail do usuário é:{userEmail}</p>
                    <button onclick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
            </form>
        </>
    )
}

export default Condicional