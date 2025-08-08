const listaAmigos = []; // Array para armazenar os nomes

    function adicionarAmigo(){ // Função chamada ao clicar no botão "Adicionar"
        const input = document.getElementById("amigo");
        const nome = input.value.trim(); // Remove espaços extras

        if (nome == "") { // Verifica se o campo está vazio
            alert("Digite um nome válido!");
            return;
        }

        if (listaAmigos.includes(nome)){ // Verifica se o nome já foi adicionado
            alert("Esse nome já foi adicionado.");
            input.value = "";
            return;
        }

        listaAmigos.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista na tela
        input.value = ""; // Limpa o campo após adicionar 
    }

    // Atualiza visualmente a lista de nomes adicionados na <ul id="listaAmigos">
    function atualizarLista(){
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpa a lista antes de atualizar

        listaAmigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
    if (listaAmigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
    }

    let embaralhado;
    let valido = false;

    
    while (!valido) {
    embaralhado = [...listaAmigos].sort(() => Math.random() - 0.5);
    valido = listaAmigos.every((amigo, i) => amigo !== embaralhado[i]);
    } // Tenta sortear até que ninguém tire a si mesmo

    const sorteio = listaAmigos.map((amigo, i) => {
    return { nome: amigo, amigoSecreto: embaralhado[i] };
    });

    exibirResultado(sorteio);
}


    function exibirResultado(sorteio){
        const ulResultado = document.getElementById("resultado");
        ulResultado.innerHTML = ""; // Limpa antes de mostrar

        sorteio.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} → ${item.amigoSecreto}`;
            ulResultado.appendChild(li);
        }); // // Cria um <li> para cada par sorteado

    }