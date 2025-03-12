async function cadastrarLocalizacoes()
{
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value


    const res = await fetch("http://localhost:8443/localizacoes/cadastrar", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({

            "nome": nome,
            "email": email,
            "senha": senha,
    
        })
    })

    const json = await res.json()

    if(res.status === 201 || res.status === 200)
    {
        if(json.msg.affectedRows > 0)
        {
            alert("Cadastro realizado com sucesso")
            location.href = "/users.html"
        }
    }

}

document.getElementById("btn-salvar").addEventListener("click", cadastrarLocalizacoes)