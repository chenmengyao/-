<template>
    <div class="suwis-address">

    </div>
</template>

<script>
    export default {
        name: "address",
        data() {
            return {

            }
        },
        methods: {
            getAddresses() {
                this.$axios
                    .post('/user/alladdress')
                    .then(({ data }) => {
                        console.log({data})
                    })
            }
        },
        created() {
            this.getAddresses()
        }
    }
</script>

<style scoped lang="scss">
    .suwis-address {
        min-height: 100vh;

    }

</style>