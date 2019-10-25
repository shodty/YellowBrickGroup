import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        light : true,
        baseColor: '#000',
        iconsObject : {
          concept : {
            name : 'concept',
            color: '#625e9d',
            clicked : false,
            text: 'concept'
          },
          vid : {
            name : 'vid',
            color: '#f3b120', 
            clicked : false,
            text: 'video'
          },
          gather : {
            name : 'gather',
            color: '#ed7625', 
            clicked : false,
            text: 'gathering'
          },
          print : {
            name : 'print',
            color: '#235d39', 
            clicked : false,
            text: 'print'
          },
          id : {
            name : 'id',
            color: '#edb1ca',
            clicked : false,
            text: 'identity'
          },
          photo : {
            name : 'photo',
            color : '#0076bb',
            clicked : false,
            text: 'photo'
          },
          social : {
            name : 'social',
            color: '#e43e30', 
            clicked : false,
            text: 'social'
          },
          web : {
            name : 'web',
            color: '#244c5a', 
            clicked : false,
            text: 'web'
          },
          collab : {
            name : 'collab',
            color: '#8dc63f', 
            clicked : false,
            text: 'collab'
          },            
        }
    },
    mutations: {
        darkLight: state => {
            state.light = !state.light
            if(state.light)
                state.baseColor = '#000'
            else
                state.baseColor = '#FFF'
        },
        colorChange: (state, {name, clicked}) => {
            if(clicked == false){
                state.iconsObject[name].clicked = true
            }
            else{
                state.iconsObject[name].clicked = false   
            }   
        }
    },
    actions: {
        colorChange: (context, {name, clicked}) => {
            context.commit('colorChange', {name, clicked})
        },
        darkLight: context => {
          context.commit('darkLight')
        }
    }
})