<script>
    import Counter from "$lib/components/counter.svelte";
    import DoubleCounter from "$lib/components/dueblecounter.svelte";
    let contatore = 0
    let numeri = [1,7,3,5,9,0]
    let sottolinea = true;
    $: doppio = contatore *2
</script>

<h1>Pagina Counter !!</h1>
<h2>Il valore doppio vale {doppio}</h2>
<Counter/>

<DoubleCounter bind:counter={contatore}/>

{#if contatore <5}
   <h3 class:sottolinea>Il Valore del contatore vale : {contatore} </h3>
{:else}
   <h3 class="verde">Il Valore del contatore vale : {contatore} </h3>
{/if}
<ul>
  {#each numeri as numero ,indice}
  <li>numeri[{indice}]:{numero}</li>
  {/each}
</ul>
<style>
    .verde{color: green;}
    .sottolinea {
      text-decoration: underline;
      color: red;}
</style>