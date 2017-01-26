<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <p>Welcome to Fruugal. Your personal financial advisor. To begin, ask a question::</p>
        <input v-model="message" placeholder="edit me">
        <message :message="message"></message>
        <users :users="users"></users>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

