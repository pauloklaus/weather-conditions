<template>
  <div class="card-error">
    <p class="card-error__message">Something went wrong</p>
    <button class="card-error__button" @click.stop="$emit('tryAgain')">Try Again</button>
  </div>
</template>

<style scoped>
.card-error {
  margin: 53px auto 54px;
  text-align: center;
}

.card-error__message {
  font-size: 0.9rem;
  color: var(--danger);
}

.card-error__button {
  background-color: var(--white);
  border: 3px solid var(--gray4);
  border-radius: 50px;
  font-size: 0.9rem;
  margin-top: 20px;
  padding: 10px 14px;
}

.card-error__button:hover {
  background-color: var(--gray1-opacity50);
}

.card-error__button:active {
  background-color: var(--gray1);
}
</style>
