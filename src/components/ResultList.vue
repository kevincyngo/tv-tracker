<template>
    <div class="results">
        <!-- {{queryJSON}} -->
        
  <div v-for="item in responseTxt">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'resultList',
    props: [
        'responseTxt'
    ],
    // computed: {
    //     queryJSON: function() {
    //         console.log(this.responseTxt);
    //         if (this.responseTxt) {
    //             // console.log(this.responseTxt[0].show._links.nextepisode.href)
    //             return this.responseTxt;
    //         }
    //         return this.responseTxt;
    //     }
    // },

  
}
</script>

<style scoped>
* {
    text-align:center;
    margin:50px;
}
</style>