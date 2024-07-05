<script setup>
import { ref } from 'vue';

const linguage = ref(['']);
const temporarylinguage = ref('')
function addlinguage(){
    linguage.value.push(temporarylinguage.value)
        temporarylinguage.value = ''
}

const hobbies = ref(['']);
const temporaryHobbies = ref('')
function addhobbie(){
    hobbies.value.push(temporaryHobbies.value)
    temporaryHobbies.value = ''
}

const user = ref({
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    datanasc: '',
    endereco: '',
    bio: '',
    hobbies: hobbies.value,
    progLing: linguage.value,
})

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

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form action="" class="flex p-10 shadow shadow-black rounded-lg gap-7 flex-wrap max-w-3xl justify-between">
        <input type="text" placeholder="Nome" class="" v-model="user.nome" required>
        <input class="px-3 indent-0" placeholder="Data de nascimento" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="user.datanasc" required/>
        <input type="text" placeholder="Apelido" v-model="user.apelido">
        <input type="number" placeholder="CEP" required>
        <input type="email" placeholder="Email" v-model="user.email" required>
        <input type="text" placeholder="Cidade">
        <input type="password" placeholder="Senha" v-model="user.senha" required>
        <input type="text" placeholder="Endereco" required>
        <input type="password" placeholder="Confime sua Senha" required v-model="confirmSenha">
        <select name="estado">
            <option v-for="(estado, index) in estados" :key="index" :value="estado.sigla" required>
                {{ estado.name }} - {{ estado.sigla }}
            </option>
        </select>
        <textarea name="" id="" cols="30" rows="10" class="h-36 w-full indent-0 text-start p-4" maxlength="500" placeholder="BIO" required></textarea>
        <div class="item h-36">
            <input type="text" placeholder="Hobbies" v-model="temporaryHobbies" class=" bg-white w-full rounded-ee-none">
            <input type="button" value="+" @click="addhobbie()">
            {{ user.hobbies.join(' ')}}
        </div>
        <div class="item h-36">
            <input type="text" placeholder="Linguagens" v-model="temporarylinguage" class=" bg-white w-full rounded-ee-none">
            <input type="button" value="+" @click="addlinguage()">
            {{ user.progLing.join(' ')}}
        </div>
        <input type="submit" value="Confirmar" @click="vality()" class="indent-0 bg-blue-300 border-0 text-white font-medium cursor-pointer" required>
    </form>
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