<template lang="html">
    <div align="center">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
        <h1>{{title}}</h1>
        <p>Welcome to Früügal. Your personal financial advisor. To begin, ask a question:</p>
        <input v-model="message" placeholder="edit me">
        <message :message="message"></message>
        <button @click="askWatson">Search Now!</button>
        <br>
        <span id="response"></span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    },
    methods: {
      askWatson() {
        console.log("Asking Watson!");
        $.get('api/', function(res) {
          console.log(res);
          $("#response").text(res.price);
        });
      }
    }
}
</script>
