/*export class RepositorioService {

    constructor() {

        
        // Define a URL base da Fake Store API
        this.urlBase ="https://replit.com/@rommelpuc/JSONServer#db/db_original.json";
    }

    async getAll(idUsuario) {

        console.log(`${this.urlBase}/users/${idUsuario}/repos`);

        const resposta = await fetch(`${this.urlBase}/users/${idUsuario}/repos`);

        if (!resposta.ok) {
            throw new Error('Não foi possível buscar os repositórios deste usuário');
        }

        return resposta.json();
    }


} */

// RepositorioService.js
export class RepositorioService {
    constructor() {
        // Define a URL base da Fake Store API
        this.urlBase = "https://replit.com/@rommelpuc/JSONServer#db/db_original.json";
    }

    async getAll(idUsuario) {
        console.log(`${this.urlBase}/users/${idUsuario}/repos`);
        const resposta = await fetch(`${this.urlBase}/users/${idUsuario}/repos`);
        
        if (!resposta.ok) {
            throw new Error('Não foi possível buscar os repositórios deste usuário');
        }

        return resposta.json();
    }
}

// dicas_viagem.js
import { RepositorioService } from './RepositorioService.js';

const repositorioService = new RepositorioService();

document.addEventListener('DOMContentLoaded', function () {
    repositorioService.getAll() // Chame o método getAll do serviço RepositorioService
        .then(data => preencherDestinos(data.destinos))
        .catch(error => console.error('Erro ao carregar os destinos:', error));
});

function preencherDestinos(destinos) {
    const destinosSection = document.getElementById('destinos');
    destinosSection.innerHTML = '';

    destinos.forEach(destino => {
        const card = document.createElement('div');
        card.classList.add('card', 'border-primary', 'mb-3');
        card.style.maxWidth = '540px';

        const row = document.createElement('div');
        row.classList.add('row', 'g-0');

        const colImg = document.createElement('div');
        colImg.classList.add('col-md-4');

        const img = document.createElement('img');
        img.src = "..."; // Você pode adicionar uma imagem aqui se tiver URL para as imagens dos destinos
        img.classList.add('img-fluid', 'rounded-start');
        img.alt = destino.nome;

        colImg.appendChild(img);

        const colBody = document.createElement('div');
        colBody.classList.add('col-md-8');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = destino.nome;

        // Aqui você pode adicionar o código para preencher as informações do JSON nos destinos

        const p = document.createElement('p');
        p.classList.add('card-text');
        p.textContent = "Descrição do destino"; // Exemplo: destino.dicas.hospedagem[0].descricao

        const link = document.createElement('a');
        link.href = "#"; // Aqui você pode adicionar um link para mais informações sobre o destino

        cardBody.appendChild(title);
        cardBody.appendChild(p);
        cardBody.appendChild(link);
        colBody.appendChild(cardBody);
        row.appendChild(colImg);
        row.appendChild(colBody);
        card.appendChild(row);
        destinosSection.appendChild(card);
    });
}

