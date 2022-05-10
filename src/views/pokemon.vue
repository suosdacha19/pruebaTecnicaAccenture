<template>
  <span class="o-button" @click="$router.go(-1)">Atras</span>
<h1>pokemon</h1>
  <DataTable :value="pokemonData" responsiveLayout="scroll">
    <Column field="id" header="Id"></Column>
    <Column field="name" header="Name"></Column>
  </DataTable>
  <Paginator :totalRecords="total" :rowsPerPageOptions="[10,20,30]"></Paginator>
</template>

<script>
import getPokemonnService from "./services/getPokemonn.service";
import { onMounted, ref } from "vue";

export default {
  name: "pokemon",
  setup() {
    const pokemonData = ref([]);
    const total = ref(0);
    onMounted(() => {
      getPokemonnService().then(({data}) => {
        total.value = data.count;
        let idVirtual = 1
        data.results.map(pokemon => {
          pokemon.id = idVirtual
          idVirtual++
          return {
            ...pokemon,
          }
        });
        pokemonData.value = data.results;
      }).catch((error) => {
        console.log(error);
      });
    })
    return {
      pokemonData,
      total
    }
  }
}
</script>

<style>

</style>