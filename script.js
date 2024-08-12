var progressBar = document.getElementById("progresso"); //barra de progresso
var tarefaTextAdd = document.getElementById("tarefaTextAdd"); //label do texto para add tarefa
var adicionarTarefaButton = document.getElementById("adicionarTarefaButton"); //botao para add tarefa
var progress = 0; //progresso real
var tarefasDiv = document.getElementById("tarefas");
var tarefas = tarefasDiv.querySelectorAll("h3");
var levelHtml = document.getElementById("level");
var level = 1;
var categoria = document.getElementById("categoria");
var principalCat = document.getElementById("principalCategoria");
var forcaCount = 0;
var sabedoriaCount = 0;
var carismaCount = 0;


function isComplete(){
    if(progress >= 100){
        progress = 0;
        progressBar.style.width = "0%"
        progressBar.textContent = `${progress}%`;
        level++;
        levelHtml.textContent = `Level ${level}`;
    }
}

function maiorCategoria(){
    if(Math.max(forcaCount, sabedoriaCount, carismaCount) == forcaCount){
        return principalCat.textContent = `Principal Habilidade: Força` , principalCat.style.color = "yellow";
    }else if(Math.max(forcaCount, sabedoriaCount, carismaCount) == sabedoriaCount){
        return principalCat.textContent = `Principal Habilidade: Sabedoria` , principalCat.style.color = "green";
    }else if(Math.max(forcaCount, sabedoriaCount, carismaCount) == carismaCount){
        return principalCat.textContent = `Principal Habilidade: Carisma` , principalCat.style.color = "#ffb6c1";
    }
}

function atributeCheck(id){
    if(tarefasDiv.children[id].classList.contains("Força")){
        forcaCount++;
    }else if(tarefasDiv.children[id].classList.contains("Sabedoria")){
        sabedoriaCount++;
    }else if(tarefasDiv.children[id].classList.contains("Carisma")){
        carismaCount++;
    }
    console.log(forcaCount, sabedoriaCount, carismaCount);
}


adicionarTarefaButton.onclick = function(){
    let newH3 = document.createElement("h3");
    newH3.innerHTML = tarefaTextAdd.value;
    newH3.id = tarefaTextAdd.value;
    newH3.classList.add(categoria.value)
    tarefasDiv.appendChild(newH3);
    tarefaTextAdd.value = "";
    categoria.value = "";
    newH3 = undefined;
    tarefas = tarefasDiv.querySelectorAll("h3");

    tarefas[tarefas.length - 1].addEventListener("click", function(){
        progress += Math.floor(10 / level);     
        progressBar.style.width = `${progress}%`;
        progressBar.textContent = `${progress}%`;
        atributeCheck(this.id);
        maiorCategoria();
        tarefasDiv.children[this.id].remove();    
        isComplete();
    }); 
}
















