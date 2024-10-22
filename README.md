# MercAProp

## Descripció del Projecte

**MercAProp** és una aplicació dissenyada com a guia i mapa interactiu que connecta els usuaris amb els mercats i fires que ofereixen productes locals i de proximitat a Barcelona. L'objectiu és apropar aquest tipus de comerç a tota la població, especialment a la joventut, per conscienciar sobre la importància del comerç local i impulsar l'economia de la nostra comunitat.

## Taula de continguts

1. [Deploy](#deploy)
2. [Backend](#backend)
3. [Frontend](#frontend)
4. [Data Analyst](#data-analyst)


## Deploy

### Pel backend

1. Clona el repositori:
    ```bash
    git clone https://github.com/ivanlegranbizarro/CrackathonersItAcademy.git
    ```

2. Navega fins al directori del projecte:
    ```bash
    cd CrackathonersItAcademy
    ```

3. Instal·la les dependències del backend (Laravel):
    ```bash
    composer install
    ```

4. Crea un arxiu `.env` basat en `.env.example` i configura les variables d'entorn (Base de dades, etc.).

5. Genera una nova clau d'aplicació:
    ```bash
    php artisan key:generate
    ```

6. Executa les migracions per crear les taules de la base de dades i poblar-les:
    ```bash
    php artisan migrate --seed
    ```

7. Inicia el servidor de Laravel:
    ```bash
    php artisan serve
    ```

8. Ja es poden testejar els endpoints

 **`GET /`** - Redirecciona cap a la documentació interactiva.

 **`GET /api/street_market`** - Retorna una llista de tots els mercats i fires.

 **`GET /api/street_market/{id}`** - Retorna els detalls d'un mercat o fira específic pel seu ID.

 **`POST /api/street_market`** - Crea un nou mercat o fira. S'han d'enviar les dades al cos de la sol·licitud.

**`PUT /api/street_market/{id}`** - Actualitza els detalls d'un mercat o fira existent pel seu ID. S'han d'enviar les dades actualitzades al cos de la sol·licitud.

**`DELETE /api/street_market/{id}`** - Elimina un mercat o fira específic pel seu ID.

**`POST /api/street_market/import`** - Importa dades en format JSON. S'ha d'enviar un fitxer JSON al cos de la sol·licitud.





### Pel frontend

La demostració es pot trobar a: https://mercaprop-app.netlify.app/

## Backend

El **backend** utilitza **Laravel** per proporcionar una API RESTful que gestiona els mercats i fires.

### Escalabilitat i seguretat:
- **Arquitectura MVC** per dividir responsabilitats i de fàcil maneig.
- Validació de peticions per protegir la integritat de les dades.

Funcionalitats:
- Llistat, creació i actualització de mercats i fires.
- Importació massiva de dades via JSON.

## Frontend

El **Frontend** està dissenyat amb **React** per oferir una interfície visual i fàcil d'usar. Components principals:

- **Llista de mercats** amb targetes individuals i detalls en un modal.
- **Mapa interactiu** amb la ubicació dels mercats.
- **Filtre de cerca** en un input per cercar esdeveniments concrets per nom.

## Data Analyst

El **Data Analyst** ha treballat amb les dades de:

- [Mercats i fires al carrer](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-fires-carrer)
- [Mercats municipals](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-municipals)

### Dades clau:
- Nom del mercat, direcció, barri, districte, telèfon, coordenades (lat/long), i tipus de mercat (fira/mercat municipal).

Les dades es processen i es carreguen al backend en format **JSON**.
