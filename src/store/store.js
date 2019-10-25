import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        light : true,
        iconsObject : {
            names : [        
                'id',
                'vid',
                'gather',
                'print',
                'concept',
                'photo',
                'social',
                'web',
                'collab',
            ],
            color: '#000',
          id : {
            name : 'id',
            color: '#edb1ca',
            clicked : false
          },
          vid : {
            name : 'vid',
            color: '#f3b120', 
            clicked : false
          },
          gather : {
            name : 'gather',
            color: '#ed7625', 
            clicked : false
          },
          print : {
            name : 'print',
            color: '#235d39', 
            clicked : false
          },
          concept : {
            name : 'concept',
            color: '#625e9d',
            clicked : false
          },
          photo : {
            name : 'photo',
            color : '#0076bb',
            clicked : false
          },
          social : {
            name : 'social',
            color: '#e43e30', 
            clicked : false
          },
          web : {
            name : 'web',
            color: '#244c5a', 
            clicked : false
          },
          collab : {
            name : 'collab',
            color: '#8dc63f', 
            clicked : false
          },            
        }
    },
    mutations: {
        darkLight: state => {
            state.light = !state.light
            if(state.light)
                state.iconsObject.color = '#000'
            else
                state.iconsObject.color = '#FFF'
        },
        colorChange: (state, {name, clicked}) => {
            if(clicked == false){
                state.iconsObject[name].clicked = true
            }
            else{
                state.iconsObject[name].color = state.iconsObject.color
                state.iconsObject[name].clicked = false   
            }   
        }
    },
    actions: {
        colorChange: (context, {name, clicked}) => {
            context.commit('colorChange', {name, clicked})
        }
    }
})