<script setup>
import { ref, reactive } from "vue";

const infoUser = ref({
  name: '',
  email: '',
  password: '',
  born: '',
  address: '',
  state: '',
  progLang: '',
  bio: '',
})

const infoHobbies = ref([])

const confirmPassword = ref("")

const userCity = ref([""])

const allStates = ref([
  { 'name': 'Estado', 'sigla': '' },
  { 'name': 'Acre', 'sigla': 'AC-' },
  { 'name': 'Alagoas', 'sigla': 'AL-' },
  { 'name': 'Amapá', 'sigla': 'AP-' },
  { 'name': 'Amazonas', 'sigla': 'AM-' },
  { 'name': 'Bahia', 'sigla': 'BA-' },
  { 'name': 'Ceará', 'sigla': 'CE-' },
  { 'name': 'Distrito Federal', 'sigla': 'DF-' },
  { 'name': 'Espírito Santo', 'sigla': 'ES-' },
  { 'name': 'Goiás', 'sigla': 'GO-' },
  { 'name': 'Maranhão', 'sigla': 'MA-' },
  { 'name': 'Mato Grosso', 'sigla': 'MT-' },
  { 'name': 'Mato Grosso do Sul', 'sigla': 'MS-' },
  { 'name': 'Minas Gerais', 'sigla': 'MG-' },
  { 'name': 'Pará', 'sigla': 'PA-' },
  { 'name': 'Paraíba', 'sigla': 'PB-' },
  { 'name': 'Paraná', 'sigla': 'PR-' },
  { 'name': 'Pernambuco', 'sigla': 'PE-' },
  { 'name': 'Piauí', 'sigla': 'PI-' },
  { 'name': 'Rio de Janeiro', 'sigla': 'RJ-' },
  { 'name': 'Rio Grande do Norte', 'sigla': 'RN-' },
  { 'name': 'Rio Grande do Sul', 'sigla': 'RS-' },
  { 'name': 'Rondônia', 'sigla': 'RO-' },
  { 'name': 'Roraima', 'sigla': 'RR-' },
  { 'name': 'Santa Catarina', 'sigla': 'SC-' },
  { 'name': 'São Paulo', 'sigla': 'SP-' },
  { 'name': 'Sergipe', 'sigla': 'SE-' },
  { 'name': 'Tocantins', 'sigla': 'TO-' },
  { 'name': 'Estrangeiro', 'sigla': 'EX-' }
])

const userImg = reactive({
  avatar: undefined
})

function saveProfileImg(e) {
  const target = e.target
  if (target && target.files && target.files.length > 0) {
    const file = target.files[0]
    userImg.avatar = URL.createObjectURL(file)
  }
}

const showFormP1 = ref(true)
const showFormP2 = ref(false)

const alterarBooleano = () => {
  showFormP1.value = !showFormP1.value
  showFormP2.value = !showFormP2.value
}

</script>

<template>
    <main class="">
        <transition>
        
        </transition>
    </main>
</template>

<style>

</style>