require 'sinatra'
require 'json'
require 'rest-client'
require 'rack/cors'

use Rack::Cors do
    allow do
      origins 'http://localhost:3000'
      resource '*', headers: :any, methods: [:get, :post, :options]
    end
end

get '/cep/:cep' do
  content_type :json
  cep = params['cep']
  url = "https://viacep.com.br/ws/#{cep}/json/"
  response = RestClient.get(url)
  response.body
end