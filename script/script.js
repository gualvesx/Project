async function listarLocalizacoes()
{
    const tbLocalizacoes = document.getElementById("tb-localizacao")

    const res = await fetch("http://localhost:8443/localizacoes")
    const json = await res.json()

    if(res.status === 200){
        
        json.localizacoes.map(
            (local) => {
                tbLocalizacoes.innerHTML += `
                    <tr>
                        <td>${local.id}</td>
                        <td>${local.nome}</td>
                        <td>${local.email}</td>
                        <td>${local.senha}</td>
                    </tr>
                `
             }
        )
    }
}



listarLocalizacoes()