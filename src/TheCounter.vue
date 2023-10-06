<template>
  <div>
      <p>{{ $store.getters.username }}</p>
      <button @click="callMutation">Change!</button>
      
  </div>
</template>

<script >
import { mapGetters} from 'vuex';
import { useStore } from 'vuex';
 
export default {
  name:"TheCounter",

  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    
  },

  setup () {
    const store = useStore();

    const callMutation = () => {
      store.commit('setusername');
    };

    return {
      callMutation
    };
  }
  
}
</script>
