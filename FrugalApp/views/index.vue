<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <p>Welcome to Fruugal. Your personal financial advisor. To begin, ask a question::</p>
        <input v-model="message" placeholder="edit me">
        <message :message="message"></message>
        <button @click="askWatson">Reverse Message</button>
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
          $("#response").append(res.price);
        });
      }
    }
}
</script>

