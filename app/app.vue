
<template>
  <div>
    <section class="divider">
      <div class = "nameBox">
        <h1 class="name"> Eliott TAN </h1>
      </div>
    </section>    

    <section class="body">
      <h1>Bienvenue sur mon portfolio ! codé avec nuxt et vue test texte pour voir si ça saute la ligne </h1>
        <Text class ="st">Le portfolio est en construction veuillez revenir plus tard !</Text>
    </section>
  </div>
</template>

<style>

@import url("assets/main.css");

.divider {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://plus.unsplash.com/premium_photo-1759354802989-fe550925a411?q=80&w=1171&auto=format&fit=crop");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 30vh;
}
.name{
  justify-content: center;
  color:azure;
  margin-top:10px;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
}

.nameBox{
  background-color:rgba(0, 0, 0, 0.144);
}

.bandroll{
  background-color: black;
}
</style>

