<template>
  <div class="card ">
    <div class="p-4 z-1 w100% h100%">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.card {
  background: #86b5f1;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  /* border-radius: 20px; */
}

.card h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card::before {
  content: '';
  position: absolute;
  width: 800px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 70px;
  animation: rotBGimg 6s linear infinite;
  transition: all 1s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: white;
  ;
  inset: 5px;
  border-radius: 15px;
}

/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
</style>