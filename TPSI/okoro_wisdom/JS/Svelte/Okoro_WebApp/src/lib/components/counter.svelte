
<script>
    
    export let counter = 0;
    function incrementa() {
      counter++;
    }
    function decremento() {
      counter--;
    }
    
  </script>

<h2>Counter 1</h2>
<svelte:head>
  <link href="https://fonts.googleleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
  <link href="https://fonts.googleleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet"/>
</svelte:head>
<div class="container">
    <div class="pulsante">
        <button on:click={decremento}>
            <span class="materiale-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {counter}   
    </div>
    <div class="pulsante">
        <button on:click={incrementa}>
            <span class="materiale-symbols-outlined icon">add</span>
        </button>
    </div>
</div>

<style>
    .container{
        border: 4px  solid #D43c2f;
        display: flex;
        justify-content: space-between;
        border-radius:  30px;
        width: 300px;
        padding: 10px;
    }
    .pulsante{
        display: flex;
        align-items: center;
    }
    button{
        border: none;
        background: none;
    }
    .icon {
        font-size: 2.5rem;
        color: #f09c00;
        font-weight: bolder;
    }
    .icon:active{
        text-shadow: 1px 1px 10px #d43c2f;
    }
    .number{
        font-size: 4rem;
        font-family: 'Bungee Spice',cursive;
    }
</style>