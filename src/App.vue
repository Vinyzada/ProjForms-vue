<script setup>
import { ref } from 'vue';

const linguage = ref([]);
const temporarylinguage = ref('')
function addlinguage(){
    linguage.value.push(temporarylinguage.value)
        temporarylinguage.value = ''
}

const hobbies = ref([]);
const temporaryHobbies = ref('')
function addhobbie(){
    hobbies.value.push(temporaryHobbies.value)
    temporaryHobbies.value = ''
}

const estados = ([
  { 'name': 'Acre', 'sigla': 'AC' },
  { 'name': 'Alagoas', 'sigla': 'AL' },
  { 'name': 'Amapá', 'sigla': 'AP' },
  { 'name': 'Amazonas', 'sigla': 'AM' },
  { 'name': 'Bahia', 'sigla': 'BA' },
  { 'name': 'Ceará', 'sigla': 'CE' },
  { 'name': 'Distrito Federal', 'sigla': 'DF' },
  { 'name': 'Espírito Santo', 'sigla': 'ES' },
  { 'name': 'Goiás', 'sigla': 'GO' },
  { 'name': 'Maranhão', 'sigla': 'MA' },
  { 'name': 'Mato Grosso', 'sigla': 'MT' },
  { 'name': 'Mato Grosso do Sul', 'sigla': 'MS' },
  { 'name': 'Minas Gerais', 'sigla': 'MG' },
  { 'name': 'Pará', 'sigla': 'PA' },
  { 'name': 'Paraíba', 'sigla': 'PB' },
  { 'name': 'Paraná', 'sigla': 'PR' },
  { 'name': 'Pernambuco', 'sigla': 'PE' },
  { 'name': 'Piauí', 'sigla': 'PI' },
  { 'name': 'Rio de Janeiro', 'sigla': 'RJ' },
  { 'name': 'Rio Grande do Norte', 'sigla': 'RN' },
  { 'name': 'Rio Grande do Sul', 'sigla': 'RS' },
  { 'name': 'Rondônia', 'sigla': 'RO' },
  { 'name': 'Roraima', 'sigla': 'RR' },
  { 'name': 'Santa Catarina', 'sigla': 'SC' },
  { 'name': 'São Paulo', 'sigla': 'SP' },
  { 'name': 'Sergipe', 'sigla': 'SE' },
  { 'name': 'Tocantins', 'sigla': 'TO' },
  { 'name': 'Estrangeiro', 'sigla': 'EX' }
])

const cep = ref()
const end = ref('')
const enderecoApi = ref('')
const cidade = ref('')
const estado = ref('')
const cadastrado = ref(false)
const autorized = ref(false)
const menu = ref(false)

const getAddress = async (cep) => {

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiUrl)

    end.value = await response.json()
    const bairro = ref(end.value.bairro)
    const rua = ref(end.value.logradouro)

    enderecoApi.value = `${rua.value} - ${bairro.value}`
    cidade.value = end.value.localidade
    estado.value = end.value.uf

    console.log(user.value.estado)
}

const user = ref({
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    datanasc: '',
    endereco: enderecoApi,
    cidade: cidade,
    estado: estado,
    bio: '',
    hobbies: [hobbies.value],
    progLing: [linguage.value],
})

const alertPin = ref(false)
const senhaConfirm = ref('')
const formIncomplete = ref(true)

function validar(){
    if(user.value.senha == senhaConfirm.value || (cadastrado.value == true && autorized.value == true)){
      formIncomplete.value = !formIncomplete.value
      autorized.value = !autorized.value
      cadastrado.value = true
      senhaConfirm.value = ''
      menu.value = false
    }else{
      alertPin.value = !alertPin.value
    }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen z-10" v-if="formIncomplete">
    <form @submit.prevent="validar" class="flex p-10 shadow shadow-black rounded-lg gap-7 flex-wrap max-w-3xl justify-between">
        <input type="text" placeholder="Nome" class="" v-model="user.nome" required>
        <input class="px-3 indent-0" placeholder="Data de nascimento" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="user.datanasc" required/>
        <input type="text" placeholder="Apelido" v-model="user.apelido">
        <input type="number" placeholder="CEP" required v-model="cep" @focusout="getAddress(cep)">
        <input type="email" placeholder="Email" v-model="user.email" required>
        <input type="text" placeholder="Cidade" v-model="user.cidade">
        <input type="password" placeholder="Senha" v-model="user.senha" required v-if="cadastrado" disabled>
        <input type="password" placeholder="Senha" v-model="user.senha" required v-else>
        <input type="text" placeholder="Endereco" required v-model="user.endereco">
        <input type="password" placeholder="Confime sua Senha" required v-model="senhaConfirm">
        <select name="estado" :value="user.estado.toLocaleLowerCase()">
            <option v-for="(estado, index) in estados" :key="index" :value="estado.sigla.toLocaleLowerCase()" required>
                {{ estado.name }} - {{ estado.sigla }}
            </option>
        </select>
        <textarea name="" id="" v-model="user.bio" cols="30" rows="10" class="h-36 w-full indent-0 text-start p-4" maxlength="200" placeholder="BIO" required></textarea>
        <div class="item h-36">
            <input type="text" placeholder="Hobbies" v-model="temporaryHobbies" class=" bg-white w-full rounded-ee-none">
            <input type="button" value="+" @click="addhobbie()">
            <ul class="flex flex-col">
              <li v-for="hobbie in user.hobbies" :key="hobbie">{{ hobbie.join(' / ') }}</li>
            </ul>
        </div>
        <div class="item h-36">
            <input type="text" placeholder="Linguagens" v-model="temporarylinguage" class=" bg-white w-full rounded-ee-none">
            <input type="button" value="+" @click="addlinguage()">
            <ul class="flex flex-col">
              <li v-for="lingua in user.progLing" :key="lingua">{{ lingua.join(' / ') }}</li>
            </ul>
        </div>
        <input type="submit" value="Confirmar" class="indent-0 bg-blue-300 border-0 text-white font-medium cursor-pointer" required>
    </form>
  </div>
  <div v-else class="w-screen h-screen flex items-center justify-center">
    
    <div class="h-5/6 w-1/2 shadow-black shadow p-10 rounded-2xl">
      <div class="flex justify-end mb-3">
          <button @click="menu=!menu" class="text-3xl font-bold rotate-90">...</button>
          <div v-if="menu" class=" absolute translate-y-16 bg-white w-32 h-16  border-2 border-solid border-black">
            <ul class="p-5 text-center">
              <li @click="validar()" class="cursor-pointer mb-3">Editar</li>
            </ul>
          </div>
      </div>
      <div class="flex items-center justify-around">
        <div class="w-32 bg-black h-32 rounded-full"></div>
        <div class="flex flex-col justify-end">
          <span class="text-2xl font-bold">{{ user.apelido }}</span>
          <span>{{ user.nome }}</span>
          <span>{{ user.datanasc.slice(5).replace("-", "/")}}</span>
        </div>
      </div>
      <div class="flex bg-blue-50 mx-12 mt-10 p-3 rounded-xl text-wrap w-5/6">
        <p class="">"{{ user.bio }}"</p>
      </div>
      <div class="flex flex-col gap-3 mt-10">
        <diV>
          <span class="font-semibold">Hobbies</span>
            <ul class="flex bg-blue-50 px-5">
              <li v-for="hobbie in user.hobbies" :key="hobbie">{{ hobbie.join(', ') }}</li>
            </ul>
        </diV>
        <diV>
          <span class="font-semibold">Linguagens</span>
          <ul class="flex bg-blue-50 px-5">
              <li v-for="ling in user.progLing" :key="ling">{{ ling.join(', ') }}</li>
            </ul>
        </diV>
      </div>
      <div class="mt-10 text-center rounded-full bg-blue-100">
        {{ user.endereco }},
        {{ user.cidade }} - 
        {{ user.estado }}
      </div>
    </div>
  </div>

  <div v-if="alertPin" class="w-screen h-screen absolute top-0 flex justify-center items-center backdrop-blur-sm">
    <div class="w-96 h-54 bg-blue-300 font-bold text-white flex flex-col items-start rounded-xl p-10">
      <h1>As senhas nao sao compativeis</h1>
      <button class="bg-blue-500 py-2 px-5 rounded-xl my-5" @click="alertPin=!alertPin">OK</button>
      <button class="text-blue-200 text-sm">Esqueci minha senha</button> 
    </div>
  </div>
</template>

<style>
.item{
    background-color: rgb(244, 243, 255);
    width: 45%;
    border-radius: 10px;
}
.item input[type=button]{
    content: '+';
    width: 30px;
    height: 30px;
    background-color: rgb(222, 209, 252);
    position: absolute;
    transform: translate(-45px,10px);
    color: white;
    font-size: 17px;
    font-weight: 800;
    border-radius: 3rem;
    cursor: pointer;
    border: none;
    text-indent: 0px;
}
input, select, textarea{
    border: 1px solid rgb(141, 141, 141);
    border-radius: 10px;
    height: 50px;
    width: 45%;
    text-indent: 20px;
}
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
}
</style>