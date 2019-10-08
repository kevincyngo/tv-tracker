<template>
    <div class="results">
        {{queryJSON}}
    </div>
</template>

<script>
export default {
    name: 'resultList',
    props: [
        'responseTxt'
    ],
    computed: {
        queryJSON: function() {
            console.log(this.responseTxt);
            if (this.responseTxt) {
                console.log(this.responseTxt[0].show._links.nextepisode.href)
                return this.responseTxt[0];
            }
            return this.responseTxt;
        }
    },
      data() {
    return {
    };
  }
}
</script>

<style scoped>
* {
    text-align:left;
    margin-left:50px;
}
</style>