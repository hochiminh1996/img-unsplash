document.addEventListener("DOMContentLoaded", createImage);


function createImage() {
    let div = document.querySelector("#conteudo");

    //verifica se existe o element imagem no html
    if (!document.querySelector("#imagem")) {//se não existir ele cria 
        let img = document.createElement("img");//cria o elemento
        img.setAttribute("id", "imagem");//adiciona o id
        img.src = `https://source.unsplash.com/random/${Math.random()}`;//adiciona a url
        img.title = ":)";
        div.appendChild(img);//adiciona na dom

        /*

            Se não usar o Math.random(), o navegador fará uma nova requisição ao Unsplash, mas como a URL da imagem é a mesma, o Unsplash pode retornar a mesma imagem que foi armazenada em cache anteriormente. Isso pode causar um atraso na atualização da imagem, já que o navegador não precisa fazer o download da imagem novamente, mas simplesmente exibe a imagem armazenada em cache.

            Digamos que essa imagem armazenada em cache da primeira solicitação : https://images.unsplash.com/photo-1677629322685-bb7786037ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzk2NzkwOQ&ixlib=rb-4.0.3&q=80&w=1080

            Como estamos apontando para a msm url, sem o math, o navegador entende que é a mesma imagem, e puxa a última armazenada em cache. Ao adicionar o math, ele força o navegador fazer uma nova requisição : https://source.unsplash.com/random/${Math.random(), o random coloca qualquer valor


            Ao adicionar o Math.random() na URL, você está efetivamente adicionando um valor aleatório à URL da imagem a cada vez que ela é solicitada (https://source.unsplash/random/1343). Isso força o navegador a fazer uma nova requisição ao Unsplash a cada vez que a função createImage é chamada, mesmo que a URL da imagem seja a mesma. Dessa forma, você garante que o navegador sempre exibe uma imagem diferente, mesmo que a URL da imagem seja a mesma.

        */

    } else {// se já existir o elemento, apenas chama outra imagem.
        let img = document.querySelector("#imagem");
        img.src = `https://source.unsplash.com/random/${Math.random()}`;


    }

}

function getColor(img) {
}

setInterval(createImage, 2000);


