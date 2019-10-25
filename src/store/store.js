import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        light : true,
        baseColor: '#000',
        bgc: 'white',
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
        },
        cubeObject : {
          os : {
            letter: 'letter-o',
            color1: '#2a276c',
            color2: '#e5b4c8',
            image: 'os',
            pattern: [1,1,1,1,1,1,1,1,1],
            text: 'Our Street'
          },
          acr : {
            letter: 'letter-a',
            color1: '#67a844',
            color2: '#006bb6',
            image: 'acr',
            pattern: [1,1,0,1,0,1,1,1,0],
            text: 'All City Riders'
          },
          jump : {
            letter: 'letter-j',
            color1: '#e03b26',
            color2: '#ffffff',
            image: 'jump',
            pattern: [1,0,1,0,1,1,1,0,1],
            text: 'Jump'
          },
          mas : {
            letter: 'letter-m',
            color1: '#00adbb',
            color2: '#c6d655',
            image: 'mas',
            pattern: [0,0,1,1,0,1,1,1,0],
            text: 'Mas Taco'
          },
          btm : {
            letter: 'letter-b',
            color1: '#f2bcb9',
            color2: '#f26351',
            image: 'btm',
            pattern: [1,1,1,1,1,1,1,0,1],
            text: 'Bottomless'
          },
          shang : {
            letter: 'letter-s',
            color1: '#d6693f',
            color2: '#f4e6c1',
            image: 'shang',
            pattern: [1,0,0,1,0,1,1,1,1],
            text: 'Shangri-La'
          },
          cabin : {
            letter: 'letter-c',
            color1: '#34442c',
            color2: '#fbcc53',
            image: 'cabin',
            pattern: [1,0,0,1,0,1,1,1,0],
            text: 'The Cabin'
          },
          alt : {
            letter: 'letter-a',
            color1: '#8667ad',
            color2: '#61cbea',
            image: 'alt',
            pattern: [1,0,1,1,0,1,1,0,1],
            text: 'Art Life Tour'
          },
          bm : {
            letter: 'letter-b',
            color1: '#85ba9b',
            color2: '#feede5',
            image: 'bm',
            pattern: [1,0,0,1,0,0,1,0,1],
            text: 'Bardis Miry'
          }
    
        },
        cubeFace : 'showFront'
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
        },
        backgroundChange: (state, color) => {
          state.bgc = color
        },
        faceChange: (state, face) => {
          state.cubeFace = face
        }
    },
    actions: {
        colorChange: (context, {name, clicked}) => {
          context.commit('colorChange', {name, clicked})
        },
        darkLight: context => {
          context.commit('darkLight')
        },
        backgroundChange: (context, color) => {
          context.commit('backgroundChange', color)
        },
        faceChange: (context, face) => {
          context.commit('faceChange', face)
        }
    }
})