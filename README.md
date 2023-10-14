# Consultant Cep

## Description

Consultant Cep is a simple web application that allows users to search for CEP (ZIP code) information and display it on the screen. It also provides a light and dark mode to customize the appearance.

## Ruby API

This project includes a Ruby API that provides CEP information. The API can be accessed through the following endpoints:

- `GET /cep/:cep`: Returns information related to the specified CEP.

### API Usage Instructions

1. Make sure the Ruby API is up and running.
2. To query CEP information, make a GET request to the endpoint `http://localhost:4567/cep/:cep`, where `:cep` is the CEP you want to query.

Example GET request:

-GET http://localhost:4567/cep/12345678

The response will be in JSON format containing CEP information.

## Installation Instructions

Follow the provided instructions above to install and run the main application.

1. Clone this repository:

   ```bash
   git clone https://github.com/guifelippe/cep-consultant-react.git

2. Navigate to the project directory:

   ```bash
   cd cep-consultant-cep

3. Install the dependencies:

    ```bash
    npm install

4. Start the application:

    ```bash
    npm start

5. Access the application in your web browser: http://localhost:3000

## Usage

- Enter a CEP in the search box.
- Click the "Search" button to retrieve information.
- The result will be displayed on the screen.
- Use the "Dark Mode" button to toggle between light and dark modes.